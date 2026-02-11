import { createHandlers } from '@/app';
import ContactPage from '@/components/contact/page';
import BasicLayout from '@/components/layouts/basic';
import { buildFooterScripts } from '@/lib/build-footer-scripts';

export const getContact = createHandlers(async (c) => {
  const scriptNonce = c.get('secureHeadersNonce');

  return c.html(
    <BasicLayout
      bodyClassName='portfolio-body'
      footerScripts={buildFooterScripts(scriptNonce)}
      htmlClassName='scroll-smooth'
      scriptNonce={scriptNonce}
      title='Contact - Ronald Salili'
    >
      <ContactPage />
    </BasicLayout>,
  );
});
