import React, { useState, FormEvent } from "react";
import {
  scheduleAppointment,
  AppointmentData,
} from "../services/appointmentScheduler";

const AppointmentSchedulerPage: React.FC = () => {
  const [dateTime, setDateTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [isScheduling, setIsScheduling] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMessage("");

    const appointmentData: AppointmentData = {
      dateTime,
      clientName,
      clientPhone,
    };

    setIsScheduling(true);
    try {
      const result = await scheduleAppointment(appointmentData);
      console.log("Agendamento realizado:", result);
      setMessage("Consulta agendada com sucesso!");
    } catch (error: any) {
      console.error("Erro ao agendar consulta:", error);
      setMessage(`Erro: ${error.message}`);
    } finally {
      setIsScheduling(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Agendamento de Consulta</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="dateTime" className="block font-medium">
            Data e Hora:
          </label>
          <input
            id="dateTime"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="mt-1 border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="clientName" className="block font-medium">
            Nome:
          </label>
          <input
            id="clientName"
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="mt-1 border p-2 w-full rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="clientPhone" className="block font-medium">
            Telefone:
          </label>
          <input
            id="clientPhone"
            type="tel"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            className="mt-1 border p-2 w-full rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isScheduling}
          className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition disabled:opacity-70"
        >
          {isScheduling ? "Agendando..." : "Agendar Consulta"}
        </button>
      </form>
      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
};

export default AppointmentSchedulerPage;
