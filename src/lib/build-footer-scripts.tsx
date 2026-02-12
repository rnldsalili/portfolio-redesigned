import { portfolioInteractionScriptSrc } from '@/constants/script-assets';

export const buildFooterScripts = (nonce?: string) => {
  return <script nonce={nonce} src={portfolioInteractionScriptSrc} />;
};
