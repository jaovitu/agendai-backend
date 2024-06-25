import { ProfessionalsRepository } from '../../repositories/implementations/professionals-repository';
import { UsersRepository } from '../../repositories/implementations/users-repository';
import { CreateProfessionalController } from './create-professional-controller';
import { CreateProfessionalUseCase } from './create-professional-use-case';

const professionalsRepository = new ProfessionalsRepository();
const usersRepository = new UsersRepository();
const createProfessionalUseCase = new CreateProfessionalUseCase(professionalsRepository, usersRepository);
const createProfessionalController = new CreateProfessionalController(createProfessionalUseCase);

export { createProfessionalController };
