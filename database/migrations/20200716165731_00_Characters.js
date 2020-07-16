exports.up = function (knex) {
  return knex.schema.createTable('characters', (tbl) => {
    tbl.increments()

    tbl.string('name', 128).notNullable().unique()

    tbl.string('gender', 32).notNullable()

    tbl.string('imageurl', 128).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('characters')
}
