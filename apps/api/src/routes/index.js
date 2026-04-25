import { Router } from 'express';
import healthCheck from './health-check.js';
import contactRouter from './contact.js';
import verifyRouter from './verify.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/contact', contactRouter);
    router.use('/api/verify', verifyRouter);

    return router;
};