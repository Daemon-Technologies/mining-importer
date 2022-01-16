const dotenv = require('dotenv');
dotenv.config();
const HASURA_URL = process.env.HASURA_URL;
const HASURA_ADMIN_KEY = process.env.HASURA_ADMIN_KEY;

const scalars = {
    bigint: 'number',
    timestamptz: 'string',
};

module.exports = {
    schema: [
        {
            [HASURA_URL]: {
                headers: {
                    'x-hasura-admin-secret': HASURA_ADMIN_KEY,
                },
            },
        },
    ],
    documents: ['./graphql/*.graphql'],
    overwrite: true,
    generates: {
        './graphql/node-types.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
            config: {
                documentNode: 'documentNode',
                scalars,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};