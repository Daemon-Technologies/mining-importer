import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../../graphql/node-types';
import { HASURA_ADMIN_KEY, HASURA_URL } from './constants';

const client = new GraphQLClient(HASURA_URL, {
    headers: {
        'x-hasura-admin-secret': HASURA_ADMIN_KEY,
    },
});
export const graphClient = getSdk(client);
