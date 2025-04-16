import React from "react";
import { Instagram, Facebook, MessageCircle, X } from "lucide-react";

interface ContactCardProps {
  onClose: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 rounded-3xl shadow-2xl p-10 max-w-md w-full transform transition-all duration-300 hover:scale-105">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full p-2 shadow-md focus:outline-none transition transform hover:scale-105"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-wide">
          Contato - Clínica Odontológica
        </h2>
        <div className="mb-8 space-y-4 text-gray-700 text-lg">
          <div>
            <span className="font-semibold">Telefone:</span> (11) 3000-0000
          </div>
          <div>
            <span className="font-semibold">Celular:</span> (11) 99000-0000
          </div>
          <div>
            <span className="font-semibold">Endereço:</span> Av. Paulista, 1000
            - Bela Vista
            <br />
            São Paulo - SP, 01310-100
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 transition"
            aria-label="Instagram"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition"
            aria-label="Facebook"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://wa.me/5511990000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 transition"
            aria-label="WhatsApp"
          >
            <MessageCircle size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
