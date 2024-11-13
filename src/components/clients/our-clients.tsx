import React from "react";
import Image from "next/image";

const ClientSection = () => {
  const clients = [
    {
      id: 1,
      name: "Acrevis",
      logoPath: "/assets/logos/oh_logo_01.png",
    },
    {
      id: 2,
      name: "Ancasta",
      logoPath: "/assets/logos/oh_logo_02.png",
    },
    {
      id: 3,
      name: "Abu Garcia",
      logoPath: "/assets/logos/oh_logo_03.png",
    },
    {
      id: 4,
      name: "Burflex",
      logoPath: "/assets/logos/oh_logo_07.png",
    },
    {
      id: 5,
      name: "Jestons",
      logoPath: "/assets/logos/oh_logo_08.png",
    },
    {
      id: 6,
      name: "SMATRICS",
      logoPath: "/assets/logos/oh_logo_09.png",
    },
  ];

  return (
    <div className="bg-[#161619] text-white py-8 px-6 md:py-16 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10 md:mb-20">
          <div className="text-sm uppercase tracking-wide mb-4">
            OUR CLIENTS
          </div>

          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-[500px] mb-6 md:mb-0">
              <h2
                className="text-[40px] md:text-[56px] font-bold leading-[1.1]"
                style={{ fontFamily: "Space Grotesk" }}
              >
                We're going to became partners for the long run.
              </h2>
            </div>

            <div className="w-full md:w-[545px] md:pt-2">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                While creating inspiring places for people, product team which
                <span className="font-bold"> creates amazing UI/UX </span>
                experiences,
                <span className="font-bold"> by crafting top-notch </span>
                user experience.
              </p>
            </div>
          </div>
        </div>

``        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center">
              <Image
                src={client.logoPath}
                alt={`${client.name} logo`}
                width={120}
                height={40}
                className="object-contain w-full max-w-[120px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
