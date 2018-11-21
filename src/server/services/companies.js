

 const schema = client => ({
   companies: {
     findAll: async () => await client.select().table('companies'),
   }
 });

 export default schema;
