import Knex from 'knex';


// Criações e alterações
export  async function up(knex: Knex){
	return knex.schema.createTable('connections', table => {
		table.increments('id').primary();
		
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
	});
}


// Desfaz alterações.. Caso de merda

export async function down(knex: Knex){
	return knex.schema.dropTable('connections');
}
