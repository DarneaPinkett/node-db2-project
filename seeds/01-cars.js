
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 012345, Make: 'Ford', Model:'Mustang', Mileage: 3000, Transmission:'Automatic', Title:'clean',},
        {VIN: 123456, Make: 'Ford', Model:'Explorer', Mileage: 0, Transmission:'Automatic', Title:'salvage',},
        {VIN: 234567, Make: 'Ford', Model:'Escape', Mileage: 5000, Transmission:'Automatic', Title:'clean',},
        {VIN: 345678, Make: 'Ford', Model:'Fusion', Mileage: 9000, Transmission:'Automatic', Title:'clean',},
      ]);
    });
};
