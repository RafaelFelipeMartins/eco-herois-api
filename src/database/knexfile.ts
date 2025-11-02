import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "pg",
        connection: {
            host: process.env.DB_HOST || "localhost",
            user: process.env.DB_USER || "postgres",
            password: process.env.DB_PASS || "123456",
            database: process.env.DB_NAME || "ecozap",
        },
        migrations: {
            directory: "./migrations",
        },
    },
};

export default config;
