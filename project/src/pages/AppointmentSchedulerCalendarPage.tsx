import React, { useState } from "react";
import { scheduleAppointment, AppointmentData } from "../services/appointments";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Month names in Portuguese.
const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

/**
 * Helper function to get all days in a given month.
 * @param year - Four-digit year.
 * @param month - Month number (0-indexed, i.e., 0 = January).
 * @returns Array of Date objects for each day in the specified month.
 */
function getDaysInMonth(year: number, month: number): Date[] {
  const date = new Date(year, month, 1);
  const days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

/**
 * Generate a calendar grid that pads the first week and last week with null.
 * @param year - Four-digit year.
 * @param month - Month number (0-indexed, i.e., 0 = January).
 * @returns 2D array representing weeks with days (Date objects or null for padding).
 */
function getCalendarGrid(year: number, month: number): (Date | null)[][] {
  const days = getDaysInMonth(year, month);
  const firstWeekday = new Date(year, month, 1).getDay(); // 0 (Dom) to 6 (Sáb)
  const weeks: (Date | null)[][] = [];
  let week: (Date | null)[] = [];

  // Pad start with null for days before the first day of month
  for (let i = 0; i < firstWeekday; i++) {
    week.push(null);
  }

  days.forEach((day) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  // Pad the last week if necessary
  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }

  return weeks;
}

// Define a fixed set of available time slots.
const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

const AppointmentSchedulerCalendarPage: React.FC = () => {
  const today = new Date();

  // State for current month and year
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-indexed
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Re-calc calendar grid when month/year changes
  const calendarGrid = getCalendarGrid(currentYear, currentMonth);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isScheduling, setIsScheduling] = useState(false);

  // Navigate to previous month
  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
  };

  // Navigate to next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
  };

  const handleSchedule = async () => {
    if (!selectedDate || !selectedTime) {
      setMessage("Selecione um dia e um horário para agendar.");
      return;
    }
    if (!clientName || !clientPhone) {
      setMessage("Preencha seu nome e telefone.");
      return;
    }

    // Combine the selected day and time to create a datetime object.
    const [hours, minutes] = selectedTime.split(":");
    const appointmentDate = new Date(selectedDate);
    appointmentDate.setHours(parseInt(hours), parseInt(minutes));

    const appointmentData: AppointmentData = {
      dateTime: appointmentDate.toISOString(),
      clientName,
      clientPhone,
    };

    setMessage("");
    setIsScheduling(true);
    try {
      const result = await scheduleAppointment(appointmentData);
      setMessage(result.message);
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setIsScheduling(false);
    }
  };

  const weekDayLabels = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Agendamento de Consulta
      </h1>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handlePreviousMonth}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            title="Mês Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xl font-semibold">
            {monthNames[currentMonth]} {currentYear}
          </span>
          <button
            onClick={handleNextMonth}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            title="Próximo Mês"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Selecione um dia
        </h2>
        {/* Week Day Header */}
        <div className="grid grid-cols-7 text-center font-medium text-gray-600 mb-2 w-96 mx-auto">
          {weekDayLabels.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 w-96 mx-auto">
          {calendarGrid.map((week, weekIndex) =>
            week.map((day, dayIndex) => {
              const isToday =
                day && day.toDateString() === new Date().toDateString();
              const isSelected =
                selectedDate &&
                day &&
                day.toDateString() === selectedDate.toDateString();
              return (
                <button
                  key={`${weekIndex}-${dayIndex}`}
                  onClick={() => day && setSelectedDate(day)}
                  className={`h-10 w-10 rounded-full transition 
                    ${day ? "hover:bg-blue-100" : "opacity-0 cursor-default"} 
                    ${isToday ? "border border-green-500" : ""} 
                    ${isSelected ? "bg-blue-500 text-white" : "text-gray-800"}`}
                  disabled={!day}
                >
                  {day ? day.getDate() : ""}
                </button>
              );
            })
          )}
        </div>
      </div>

      {selectedDate && (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Selecione o horário</h2>
          <div className="flex flex-wrap gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded transition border 
                  ${
                    selectedTime === time
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-800 hover:bg-green-50"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Dados do Paciente</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Nome:</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring"
            placeholder="Seu nome"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Telefone:</label>
          <input
            type="tel"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring"
            placeholder="Seu telefone"
          />
        </div>
        <button
          onClick={handleSchedule}
          disabled={isScheduling}
          className="w-full bg-primary-500 text-white py-2 rounded hover:bg-primary-600 transition disabled:opacity-70"
        >
          {isScheduling ? "Agendando..." : "Agendar Consulta"}
        </button>
      </div>

      {message && <p className="text-center text-lg mt-4">{message}</p>}
    </div>
  );
};

export default AppointmentSchedulerCalendarPage;
