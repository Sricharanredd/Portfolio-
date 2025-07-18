import React, { useState } from "react";
import certificates from "../../data/certificatesData";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

type Certificate = {
  id: string | number;
  title: string;
  image: string;
  file: string;
};

const Certificates = () => {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="min-h-screen py-20 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">🎓 Certificates</h2>

      {/* Certificate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl hover:shadow-2xl transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded-md w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 dark:text-white">{cert.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-red-500 dark:text-gray-200"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="p-6">
              <img
                src={selected.image}
                alt="Full Certificate"
                className="w-full h-auto max-h-[60vh] object-contain rounded"
              />

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={selected.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  <Eye size={18} /> View Full
                </a>
                <a
                  href={selected.file}
                  download
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  <Download size={18} /> Download
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
