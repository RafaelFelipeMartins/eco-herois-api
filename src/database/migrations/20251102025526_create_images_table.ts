import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('images', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('phone').notNullable();
        table.text('image_base64').notNullable();
        table.string('endereco');
        table.decimal('latitude', 10, 7);
        table.decimal('longitude', 10, 7);
        table.string('client_id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('captures');
}
