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
import ContactCard from "./components/ContactCard";

function App() {
  // State to handle popup modal visibility
  const [showPopup, setShowPopup] = useState(false);
  // State to handle contact card visibility
  const [showContact, setShowContact] = useState(false);

  // Opens the scheduler popup
  const handleSchedule = () => {
    setShowPopup(true);
  };

  // Closes the scheduler popup
  const closePopup = () => {
    setShowPopup(false);
  };

  // Opens the contact card
  const handleContactOpen = () => {
    setShowContact(true);
  };

  // Closes the contact card
  const closeContact = () => {
    setShowContact(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-white to-gray-50 shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <ErrorBoundary>
                <Tooth className="w-8 h-8 text-primary-500" />
              </ErrorBoundary>
              <span className="text-primary-600 text-2xl font-bold">
                Sorriso Perfeito
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-lg">
              <a
                href="#servicos"
                className="text-gray-800 hover:text-primary-600 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#convenios"
                className="text-gray-800 hover:text-primary-600 transition-colors"
              >
                Convênios
              </a>
              <a
                onClick={handleContactOpen}
                className="text-gray-800 hover:text-primary-600 transition-colors cursor-pointer"
              >
                Contato
              </a>
              <button
                onClick={handleSchedule}
                className="bg-primary-500 text-white px-5 py-2 rounded-full hover:bg-primary-600 transition-all shadow-md"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-[70vh] bg-cover bg-center pt-20 transition-all duration-500 filter hover:brightness-110 hover:contrast-125"
        style={{
          backgroundImage: "url('/assets/consultorio.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/50 backdrop-blur-sm" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Clínica Odontológica Sorriso Perfeito
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-200">
              Cuidando do seu sorriso com excelência e dedicação
            </p>
            <button
              onClick={handleSchedule}
              className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition inline-flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-6 h-6" />
              Agendar Consulta
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
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
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Plans Section */}
      <section id="convenios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
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
                className="flex items-center gap-2 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Shield className="w-6 h-6 text-primary-500" />
                <span className="text-gray-800 text-lg">{plan}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ErrorBoundary>
                  <Tooth className="w-8 h-8 text-primary-500" />
                </ErrorBoundary>
                <span className="text-primary-400 text-2xl font-bold">
                  Sorriso Perfeito
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Cuidando do seu sorriso com excelência e dedicação desde 2010.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/5519986069178"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#convenios"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Convênios
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleContactOpen}
                    className="text-gray-400 hover:text-white transition cursor-pointer"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleSchedule}
                    className="text-gray-400 hover:text-white transition bg-transparent border-none p-0 cursor-pointer"
                  >
                    Agendar Consulta
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-400">(19) 98606-9178</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-400">(19) 98606-9178</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                  <span className="text-gray-400">
                    Av. Paulista, 1000 - Bela Vista
                    <br />
                    São Paulo - SP, 01310-100
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-700 pt-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Clínica Odontológica Sorriso
              Perfeito. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition mx-2"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition mx-2"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Modal for Appointment Scheduler */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900 bg-opacity-60">
          <div className="relative bg-white rounded-2xl shadow-2xl w-11/12 max-w-3xl max-h-full overflow-auto p-8 transform transition-all duration-300">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full shadow-md focus:outline-none transition transform hover:scale-105"
              aria-label="Fechar"
            >
              <span className="sr-only">Fechar</span>X
            </button>
            <AppointmentSchedulerCalendarPage />
          </div>
        </div>
      )}

      {/* Popup Card for Contact */}
      {showContact && <ContactCard onClose={closeContact} />}
    </div>
  );
}

export default App;
