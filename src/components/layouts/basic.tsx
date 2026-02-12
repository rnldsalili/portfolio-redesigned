import { raw } from 'hono/html';
import type { Child, FC } from 'hono/jsx';

import { themeBootScriptSrc } from '@/constants/script-assets';

interface BasicLayoutProps {
  title?: string;
  htmlClassName?: string;
  bodyClassName?: string;
  scriptNonce?: string;
  children?: Child;
  headContent?: Child;
  footerScripts?: Child;
}

const joinClasses = (...classNames: Array<string | undefined>) => {
  return classNames.filter(Boolean).join(' ');
};

const renderDefaultHeadContent = (scriptNonce?: string) => {
  return (
    <>
      <script nonce={scriptNonce} src={themeBootScriptSrc} />
      <link href='https://fonts.googleapis.com' rel='preconnect' />
      <link crossOrigin='anonymous' href='https://fonts.gstatic.com' rel='preconnect' />
      <link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' rel='stylesheet' />
    </>
  );
};

const BasicLayout: FC<BasicLayoutProps> = ({
  title = 'Portfolio',
  htmlClassName,
  bodyClassName,
  scriptNonce,
  children,
  headContent,
  footerScripts,
}) => {
  return (
    <>
      {raw('<!DOCTYPE html>')}
      <html class={htmlClassName} lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content='Executive Summary Portfolio of Ronald Salili - Senior Software Engineer & Technical Lead' />
          <title>{title}</title>
          <link href='/favicon-96x96.png' rel='icon' sizes='96x96' type='image/png' />
          <link href='/favicon.svg' rel='icon' type='image/svg+xml' />
          <link href='/favicon.ico' rel='shortcut icon' />
          <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
          <link href='/site.webmanifest' rel='manifest' />
          {renderDefaultHeadContent(scriptNonce)}
          {headContent}
          <link rel='stylesheet' href='/styles.css' />
        </head>
        <body class={joinClasses('min-h-screen antialiased animate-fade-in', bodyClassName)}>
          {children}
          {footerScripts}
        </body>
      </html>
    </>
  );
};

export default BasicLayout;
