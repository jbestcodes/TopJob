import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "Basco Paints", logo: "https://www.asltrading.co.ke/wp-content/uploads/2018/07/download.png" },
  { name: "Dune Packaging", logo: "https://www.dunepackaging.com/wp-content/uploads/2022/09/DUNE-LOGO-2.png" },
  { name: "Tiger Packaging", logo: "https://www.tigerpackagingkenya.com/wp-content/uploads/2023/10/cropped-Tiger-Packaging-logo-1.png" },
  { name: "Kartasi Products Limited", logo: "data:image/jpeg;base64,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" },
  { name: "Mama Millers Ltd", logo: "https://www.businesslist.co.ke/img/ke/l/1593431072-23-mama-millers-limited.png"},
  { name: "Sunveat Foods Ltd", logo: "https://sunveat.co.ke/wp-content/uploads/2024/10/Logo-300.png"},
  
  // Add more clients here
];

function getNumVisible() {
  if (window.innerWidth < 640) return 1; // mobile
  if (window.innerWidth < 1024) return 2; // tablet
  return 3; // desktop
}

export default function ClientsSlider() {
  const [current, setCurrent] = useState(0);
  const [numVisible, setNumVisible] = useState(getNumVisible());

  // Update number of visible slides on resize
  useEffect(() => {
    const handleResize = () => setNumVisible(getNumVisible());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % clients.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Calculate visible clients, always unique
  const visibleClients = [];
  for (let i = 0; i < Math.min(numVisible, clients.length); i++) {
    visibleClients.push(clients[(current + i) % clients.length]);
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex gap-8 justify-center items-center transition-all duration-500">
        {visibleClients.map((client, idx) => (
          <div
            key={client.name}
            className="flex-shrink-0 w-36 h-20 sm:w-44 sm:h-24 flex flex-col items-center justify-center bg-slate-100 rounded shadow"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-12 sm:max-h-16 max-w-full object-contain mb-2"
            />
            <span className="text-xs sm:text-sm text-slate-700 font-medium">{client.name}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {clients.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${current === idx ? "bg-blue-700" : "bg-slate-300"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to client ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}