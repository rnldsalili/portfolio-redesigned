import { createHandlers } from '@/app';
import HomePage from '@/components/home/page';
import BasicLayout from '@/components/layouts/basic';
import { buildFooterScripts } from '@/lib/build-footer-scripts';

export const getRoot = createHandlers(async (c) => {
  const scriptNonce = c.get('secureHeadersNonce');

  return c.html(
    <BasicLayout
      bodyClassName='portfolio-body'
      footerScripts={buildFooterScripts(scriptNonce)}
      htmlClassName='scroll-smooth'
      scriptNonce={scriptNonce}
      title='Executive Summary Portfolio - Ronald Salili'
    >
      <HomePage />
    </BasicLayout>,
  );
});
