import { Appointment } from '../../database/mysql/models/Appointment';
import { Schedule } from '../../database/mysql/models/Schedule';
import { CreateAppointmentDTO } from '../../use-cases/create-appointment/create-appointment-dto';
import { IAppointmentsRepository } from '../interfaces/i-appointments-repository';

class AppointmentRepository implements IAppointmentsRepository {
  async create(appointment: CreateAppointmentDTO): Promise<Appointment | null> {
    const createdAppointment = await Appointment.create({
      userID: appointment.userID,
      scheduleID: appointment.scheduleID,
    });

    const scheduleToUpdate = await Schedule.findByPk(createdAppointment.scheduleID);

    await scheduleToUpdate?.update({
      reserved: true,
    });

    return createdAppointment;
  }
}

export { AppointmentRepository };
