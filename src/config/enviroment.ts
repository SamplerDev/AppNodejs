import dotenv from 'dotenv';

dotenv.config();

export const enviroment = {

JWT_SECRET: process.env.JWT_SECRET || '',

}