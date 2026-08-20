import { ArrowRightCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    "Escolha seu produto",
    "Veja como fazer seu pedido",
    "Encomende pelo WhatsApp"
  ];
 
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 bg-[#E5C289]">
      <div className="md:hidden flex flex-col items-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <p className="text-center text-base sm:text-lg font-medium text-gray-800">
              {step}
            </p>
            {index < steps.length - 1 && (
              <ArrowRightCircle size={28} className="text-gray-700 rotate-90" />
            )}
          </div>
        ))}
      </div>
 
      <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 flex-wrap lg:flex-nowrap">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-4 lg:gap-8">
            <p className="text-center text-lg font-medium text-gray-800 whitespace-nowrap">
              {step}
            </p>
            {index < steps.length - 1 && (
              <ArrowRightCircle size={32} className="text-gray-700 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}