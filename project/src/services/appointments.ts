export interface AppointmentData {
  dateTime: string;
  clientName: string;
  clientPhone: string;
}

/**
 * Simulates scheduling an appointment.
 * This fake implementation waits for 2 seconds before returning a simulated success object.
 *
 * @param data - The appointment data to be scheduled.
 * @returns A promise that resolves with a simulated response.
 */
export async function scheduleAppointment(data: AppointmentData): Promise<any> {
  console.log("Simulating appointment scheduling with data:", data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Consulta agendada com sucesso (simulação)!",
        data,
      });
    }, 2000);
  });
}
