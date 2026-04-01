export type ProgramStatus = 'PLANNED' | 'ACTIVE' | 'COMPLETED';

export interface Program {
  id: number;
  name: string;
  owner: string;
  status: ProgramStatus;
}
