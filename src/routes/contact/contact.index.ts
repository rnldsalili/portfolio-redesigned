import { getContact } from './contact.handler';
import { createRouter } from '@/app';

const contactRoute = createRouter()
  .get('/', ...getContact);

export default contactRoute;
