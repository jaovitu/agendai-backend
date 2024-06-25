import { SpecialtiesRepository } from '../../repositories/implementations/specialties-repository';
import { ListSpecialtiesController } from './list-specialties-controller';
import { ListSpecialtiesUseCase } from './list-specialties-use-case.';

const specialtiesRepository = new SpecialtiesRepository();
const listSpecialtiesUseCase = new ListSpecialtiesUseCase(specialtiesRepository);
const listSpecialtiesController = new ListSpecialtiesController(listSpecialtiesUseCase);

export { listSpecialtiesController };
