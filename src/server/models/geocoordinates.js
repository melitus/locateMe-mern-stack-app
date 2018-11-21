import uuid from 'uuid/v4';

const schema = client => () => ({
  geocoordinates: {
    create: async (params = {}) => {
      const p = { ...params, uuid: uuid() };
      return await client.table('geocoordinates').insert(p).returning('*');
    },
    find: async ({ id }) => (await client.select().table('geocoordinates').where({ id })),

    findAll: async () => (await client.select().table('geocoordinates')),

    remove: async ({ id }) => (await client.table('geocoordinates').where({ id }).del()),

    removeAll: async () => (await client.del().table('geocoordinates')),

    upsert: async (params = {}, { id }) => (await client.table('geocoordinates').where({ id }).update(params).returning('*')),
  }
});

export default schema;
