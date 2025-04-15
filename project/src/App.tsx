import React, { useState } from "react";
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  Shield,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import ErrorBoundary from "./components/ErrorBoundary";
import Tooth from "./components/Tooth";
import AppointmentSchedulerCalendarPage from "./pages/AppointmentSchedulerCalendarPage";

function App() {
  // State to handle popup modal visibility
  const [showPopup, setShowPopup] = useState(false);

  // Opens the scheduler popup
  const handleSchedule = () => {
    setShowPopup(true);
  };

  // Closes the scheduler popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <ErrorBoundary>
                  <Tooth className="w-6 h-6 text-primary-500 mr-1" />
                </ErrorBoundary>
              </div>
              <span className="text-primary-600 text-xl font-semibold">
                Sorriso Perfeito
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#servicos"
                className="text-neutral-800 hover:text-primary-600 transition"
              >
                Serviços
              </a>
              <a
                href="#convenios"
                className="text-neutral-800 hover:text-primary-600 transition"
              >
                Convênios
              </a>
              <a
                href="#contato"
                className="text-neutral-800 hover:text-primary-600 transition"
              >
                Contato
              </a>
              <button
                onClick={handleSchedule}
                className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-[70vh] bg-cover bg-center pt-16"
        style={{
          backgroundImage: "url('/assets/consultorio.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Clínica Odontológica Sorriso Perfeito
            </h1>
            <p className="text-xl mb-8 text-neutral-100">
              Cuidando do seu sorriso com excelência e dedicação
            </p>
            <button
              onClick={handleSchedule}
              className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Agendar Consulta
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clínica Geral",
                desc: "Tratamentos preventivos e restauradores",
              },
              {
                title: "Ortodontia",
                desc: "Aparelhos fixos e alinhadores transparentes",
              },
              {
                title: "Implantes",
                desc: "Recupere seu sorriso com implantes modernos",
              },
              {
                title: "Estética Dental",
                desc: "Clareamento e facetas em porcelana",
              },
              {
                title: "Endodontia",
                desc: "Tratamento de canal com tecnologia avançada",
              },
              {
                title: "Odontopediatria",
                desc: "Cuidados especiais para crianças",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-6 rounded-lg hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                  {service.title}
                </h3>
                <p className="text-neutral-800">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Plans Section */}
      <section id="convenios" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">
            Convênios Aceitos
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Amil Dental",
              "Bradesco Dental",
              "SulAmérica Odonto",
              "OdontoPrev",
              "Porto Seguro",
              "MetLife",
              "Unimed Odonto",
              "Interodonto",
            ].map((plan, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm"
              >
                <Shield className="w-5 h-5 text-primary-500" />
                <span className="text-neutral-800">{plan}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ErrorBoundary>
                  <Tooth className="w-6 h-6 text-primary-500 mr-1" />
                </ErrorBoundary>
                <span className="text-primary-400 text-xl font-semibold">
                  Sorriso Perfeito
                </span>
              </div>
              <p className="text-neutral-400 mb-4">
                Cuidando do seu sorriso com excelência e dedicação desde 2010.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-white transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5511990000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#servicos"
                    className="text-neutral-400 hover:text-white transition"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#convenios"
                    className="text-neutral-400 hover:text-white transition"
                  >
                    Convênios
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-neutral-400 hover:text-white transition"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleSchedule}
                    className="text-neutral-400 hover:text-white transition bg-transparent border-none p-0 cursor-pointer"
                  >
                    Agendar Consulta
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span className="text-neutral-400">(11) 3000-0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary-500" />
                  <span className="text-neutral-400">(11) 99000-0000</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary-500 mt-1" />
                  <span className="text-neutral-400">
                    Av. Paulista, 1000 - Bela Vista
                    <br />
                    São Paulo - SP, 01310-100
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-700 pt-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-neutral-400">
              &copy; {new Date().getFullYear()} Clínica Odontológica Sorriso
              Perfeito. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-white transition mx-2"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-neutral-400 hover:text-white transition mx-2"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Modal for Appointment Scheduler */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900 bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-3xl max-h-full overflow-auto p-6">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              Fechar
            </button>
            <AppointmentSchedulerCalendarPage />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
