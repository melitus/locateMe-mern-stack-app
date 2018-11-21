import uuid from 'uuid/v4';

const schema = client => () => ({
  addresses: {
    create: async (params = {}) => {
      const p = { ...params, uuid: uuid() };
      return await client.table('address').insert(p).returning('*');
    },
    find: async ({ id }) => (await client.select().table('address').where({ id })),

    findAll: async () => (await client.select().table('address')),

    remove: async ({ id }) => (await client.table('address').where({ id }).del()),

    removeAll: async () => (await client.del().table('address')),

    upsert: async (params = {}, { id }) => (await client.table('address').where({ id }).update(params).returning('*')),
  }
});


export default schema;
