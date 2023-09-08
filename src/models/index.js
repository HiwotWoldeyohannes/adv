// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Analytics } = initSchema(schema);

export {
  Todo,
  Analytics
};