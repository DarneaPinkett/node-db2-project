
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
   tbl.increments();
   tbl.integer("VIN")
   .unique()
   .notNullable();
   tbl.string("Make")
   .notNullable();
   tbl.string("Model")
   .notNullable();
   tbl.integer("Mileage")
   .notNullable();
   tbl.string("Transmission")
   .notNullable();
   tbl.string("Title")
   .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
