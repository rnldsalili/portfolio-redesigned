import { getRoot } from './root.handler';
import { createRouter } from '@/app';

const indexRoute = createRouter()
  .get('/', ...getRoot);

export default indexRoute;
