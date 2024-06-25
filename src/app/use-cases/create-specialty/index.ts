import { SpecialtiesRepository } from '../../repositories/implementations/specialties-repository';
import { CreateSpecialtyController } from './create-specialty-controller';
import { CreateSpecialtyUseCase } from './create-specialty-use-case';

const specialtiesRepository = new SpecialtiesRepository();
const createSpecialtyUseCase = new CreateSpecialtyUseCase(specialtiesRepository);
const createSpecialtyController = new CreateSpecialtyController(createSpecialtyUseCase);

export { createSpecialtyController };
