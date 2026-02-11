import { createApp } from '@/app';
import contactRoute from '@/routes/contact/contact.index';
import healthRoute from '@/routes/health/health.index';
import indexRoute from '@/routes/root/root.index';

export function registerRoutes(app: ReturnType<typeof createApp>) {
  return app
    .route('/', indexRoute)
    .route('/contact', contactRoute)
    .route('/health', healthRoute);
}

// Stand alone router type used for api client
export const router = registerRoutes(createApp());

export type AppType = typeof router;
