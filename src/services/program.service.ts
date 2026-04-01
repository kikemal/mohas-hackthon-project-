import { Program } from '../models/program.model';

const mockPrograms: Program[] = [
  {
    id: 1,
    name: 'Digital Transformation',
    owner: 'PMO Team',
    status: 'ACTIVE',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const programService = {
  getAll: (): Program[] => mockPrograms
};
