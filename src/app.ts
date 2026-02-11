import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { createFactory } from 'hono/factory';
import { logger } from 'hono/logger';
import { NONCE, secureHeaders } from 'hono/secure-headers';
import { rateLimiter } from 'hono-rate-limiter';

export type AppVariables = {
  secureHeadersNonce?: string;
};

export type AppBindings = {
  Bindings: CloudflareBindings;
  Variables: AppVariables;
};

export const createRouter = () => {
  return new Hono<AppBindings>();
};

const factory = createFactory<AppBindings>();
export const createMiddleware = factory.createMiddleware;
export const createHandlers = factory.createHandlers;

export const createApp = () => {
  const app = createRouter();

  app.use('*', secureHeaders({
    contentSecurityPolicy: {
      defaultSrc: ["'self'"],
      baseUri: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
      scriptSrc: ["'self'", NONCE],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
      imgSrc: ["'self'", 'data:', 'https:'],
      connectSrc: ["'self'", 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
      requireTrustedTypesFor: ["'script'"],
    },
    crossOriginOpenerPolicy: 'same-origin',
    referrerPolicy: 'strict-origin-when-cross-origin',
    strictTransportSecurity: 'max-age=31536000; includeSubDomains',
    xContentTypeOptions: 'nosniff',
    xFrameOptions: 'DENY',
  }));

  app.use(
    rateLimiter<AppBindings>({
      binding: (c) => c.env.RATE_LIMITER,
      keyGenerator: (c) => c.req.header('cf-connecting-ip') ?? '',
      handler: (c) => {
        return c.json({
          meta: {
            code: 429,
            message: 'Internal Server Error',
          },
        }, 429);
      },
    }),
  );

  app.use(logger());

  app.notFound((c) => {
    return c.json({
      meta: {
        code: 404,
        message: 'Not Found',
      },
    }, 404);
  });

  app.onError((err, c) => {
    return c.json({
      meta: {
        code: 500,
        message: 'Internal Server Error',
      },
    }, 500);
  });

  app.use('*', cors({
    origin: (origin, c) => {
      const allowedOrigins = c.env.CORS_ORIGINS.split(',').map((o: string) => o.trim());

      if (!origin) return null;

      return allowedOrigins.includes(origin) ? origin : null;
    },
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }));

  return app;
};
