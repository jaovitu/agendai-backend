import { ProfessionalsRepository } from '../../repositories/implementations/professionals-repository';
import { ListProfessionalsController } from './list-professionals-controller';
import { ListProfessionalsUseCase } from './list-professionals-use-case';

const professionalsRepository = new ProfessionalsRepository();
const listProfessionalsUseCase = new ListProfessionalsUseCase(professionalsRepository);
const listProfessionalsController = new ListProfessionalsController(listProfessionalsUseCase);

export { listProfessionalsController };
