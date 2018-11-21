import uuid from 'uuid/v4';

const schema = client => () => ({
  lga: {
    create: async (params = {}) => {
      const p = { ...params, uuid: uuid() };
      return await client.table('local_government').insert(p).returning('*');
    },
    find: async ({ id }) => (await client.select().table('local_government').where({ id })),

    findAll: async () => (await client.select().table('local_government')),

    remove: async ({ id }) => (await client.table('local_government').where({ id }).del()),

    removeAll: async () => (await client.del().table('local_government')),

    upsert: async (params = {}, { id }) => (await client.table('local_government').where({ id }).update(params).returning('*')),
  }
});

export default schema;
