import { Router } from 'express';
import { getTests } from '../controllers/tests.controller';
const router = Router();

router.get('/test', getTests);
export default router;