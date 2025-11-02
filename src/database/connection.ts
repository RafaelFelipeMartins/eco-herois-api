import knex from 'knex';
import dotenv from "dotenv";
import config from './knexfile';

dotenv.config();

const environment = process.env.NODE_ENV || "development";
const connection = knex(config[environment]);

export default connection;
