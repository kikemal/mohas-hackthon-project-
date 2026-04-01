import { Request, Response } from 'express';
import { programService } from '../services/program.service';

export const getPrograms = (_req: Request, res: Response) => {
  const programs = programService.getAll();
  res.status(200).json(programs);
};
