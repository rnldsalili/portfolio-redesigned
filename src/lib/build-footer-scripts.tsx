import { portfolioInteractionScript } from '@/constants/portfolio-scripts';

export const buildFooterScripts = (nonce?: string) => {
  return <script dangerouslySetInnerHTML={{ __html: portfolioInteractionScript }} nonce={nonce} />;
};
