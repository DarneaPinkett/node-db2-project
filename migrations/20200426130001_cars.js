
exports.up = function(knex) {
  return knex.schema.creatTable('cars', tbl => {
   tbl.increments();
   tbl.integer("VIN")
   .unique()
   .notNulable();
   tbl.string("make")
   .notNulable();
   tbl.string("model")
   .notNulable();
   tbl.integer("meilage")
   .notNulable();   
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
