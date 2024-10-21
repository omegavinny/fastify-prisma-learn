import * as dotenv from 'dotenv';

dotenv.config();

const APP_HOST: string = process.env.APP_HOST || '127.0.0.1' ; 
const APP_PORT: number = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000;
const APP_TZ: string = process.env.APP_TZ || 'Etc/GMT+3';  
const APP_USER: string = process.env.APP_USER || 'user';
const APP_PASS: string = process.env.APP_PASS || 'password';

export {
    APP_HOST,
    APP_PASS,
    APP_PORT,
    APP_TZ,
    APP_USER,
};
