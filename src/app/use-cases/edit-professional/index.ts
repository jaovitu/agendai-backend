import { ProfessionalsRepository } from '../../repositories/implementations/professionals-repository';
import { UsersRepository } from '../../repositories/implementations/users-repository';
import { EditProfessionalController } from './edit-professional-controller';
import { EditProfessionalUseCase } from './edit-professional-use-case';

const professionalsRepository = new ProfessionalsRepository();
const usersRepository = new UsersRepository();
const editProfessionalUseCase = new EditProfessionalUseCase(professionalsRepository, usersRepository);
const editProfessionalController = new EditProfessionalController(editProfessionalUseCase);

export { editProfessionalController };
