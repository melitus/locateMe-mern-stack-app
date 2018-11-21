import uuid from 'uuid/v4';

const schema = client => () => ({
  states: {
    create: async (params = {}) => {
      const p = { ...params, uuid: uuid() };
      return await client.table('states').insert(p).returning('*');
    },
    find: async ({ id }) => (await client.select().table('states').where({ id })),

    findAll: async () => (await client.select().table('states')),

    remove: async ({ id }) => (await client.table('states').where({ id }).del()),

    removeAll: async () => (await client.del().table('states')),

    upsert: async (params = {}, { id }) => (await client.table('states').where({ id }).update(params).returning('*')),
  }
});

export default schema;
