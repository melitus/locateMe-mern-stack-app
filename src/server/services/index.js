import companies from './';

export default db => ({
  companies: companies(db),
});
