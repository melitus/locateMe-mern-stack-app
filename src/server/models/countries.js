import uuid from 'uuid/v4';

const schema = client => () => ({
  countries: {
    create: async (params = {}) => {
      const p = { ...params, uuid: uuid() };
      return await client.table('countries').insert(p).returning('*');
    },
    find: async ({ id }) => (await client.select().table('countries').where({ id })),

    findAll: async () => (await client.select().table('countries')),

    remove: async ({ id }) => (await client.table('countries').where({ id }).del()),

    removeAll: async () => (await client.del().table('countries')),

    upsert: async (params = {}, { id }) => (await client.table('countries').where({ id }).update(params).returning('*')),
  }
});

export default schema;
