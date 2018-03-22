import express, { Router } from 'express';

import { index } from './controllers/barcodes';

const router = Router();

router.route('/barcodes')
  .get(index);

export default router;
