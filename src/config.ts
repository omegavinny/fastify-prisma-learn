import * as dotenv from 'dotenv';

dotenv.config();

const HOST: string = process.env.HOST || '127.0.0.1'; 
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const TZ: string = process.env.TZ || 'America/Sao_Paulo';  
const USER: string = process.env.USER || 'user';
const PASS: string = process.env.PASS || 'password';

export { HOST, PASS, PORT, TZ, USER };
