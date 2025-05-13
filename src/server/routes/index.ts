// src/server/routes/index.ts
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/teste', (req, res) => {
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body)
});

export { router };
