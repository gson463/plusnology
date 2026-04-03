import { Router } from 'express';
import healthCheck from './health-check.js';
import contactRouter from './contact.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/contact', contactRouter);

    return router;
};