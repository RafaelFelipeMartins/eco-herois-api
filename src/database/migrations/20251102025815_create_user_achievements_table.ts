import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('user_achievements', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('phone').notNullable(); // identifica o usuário
        table.uuid('achievement_id').notNullable()
            .references('id')
            .inTable('achievements')
            .onDelete('CASCADE');
        table.timestamp('achieved_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('user_achievements');
}
