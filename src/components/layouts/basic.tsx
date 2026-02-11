import { raw } from 'hono/html';
import type { Child, FC } from 'hono/jsx';

import { themeBootScript } from '@/constants/portfolio-scripts';

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
      <script dangerouslySetInnerHTML={{ __html: themeBootScript }} nonce={scriptNonce} />
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
          <title>{title}</title>
          <link href='/favicon.ico' rel='icon' sizes='any' />
          {renderDefaultHeadContent(scriptNonce)}
          {headContent}
          <link rel='stylesheet' href='/styles.css' />
        </head>
        <body class={joinClasses('min-h-screen antialiased', bodyClassName)}>
          {children}
          {footerScripts}
        </body>
      </html>
    </>
  );
};

export default BasicLayout;
