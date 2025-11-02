import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('achievements', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('name').notNullable(); // Nome do achievement
        table.integer('threshold').notNullable(); // Ex: 1, 5, 10...
        table.string('icon').nullable(); // opcional: URL da imagem
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('achievements');
}
