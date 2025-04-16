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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Agendamento de Consulta
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="dateTime"
                className="block font-medium text-gray-700"
              >
                Data e Hora:
              </label>
              <input
                id="dateTime"
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="mt-2 border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="clientName"
                className="block font-medium text-gray-700"
              >
                Nome:
              </label>
              <input
                id="clientName"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="mt-2 border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                required
              />
            </div>
            <div>
              <label
                htmlFor="clientPhone"
                className="block font-medium text-gray-700"
              >
                Telefone:
              </label>
              <input
                id="clientPhone"
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="mt-2 border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isScheduling}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium px-4 py-3 rounded-full hover:from-primary-600 hover:to-primary-700 transition disabled:opacity-70 shadow-lg"
            >
              {isScheduling ? "Agendando..." : "Agendar Consulta"}
            </button>
          </form>
          {message && (
            <p className="mt-8 text-center text-lg text-gray-700">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentSchedulerPage;
