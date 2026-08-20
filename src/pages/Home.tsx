import Products from "@/components/Products";
import { Button } from "../shared/components/ui/button";
import About from "@/components/About";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  const bordado = "/bordado-img.jpg";

  return (
    <main>
      <section
        style={{ backgroundImage: `url(${bordado})` }}
        className={`w-full h-80 sm:h-96 md:h-142.5 lg:h-142.5 bg-cover bg-center bg-no-repeat relative grid place-items-center md:place-items-start gap-6 md:gap-0`}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className={`relative z-10 md:absolute md:top-30 md:left-220 px-4 md:px-0`}
        >
          <p
            className={`max-w-full sm:max-w-md md:max-w-125 text-white text-base sm:text-lg md:text-2xl text-center md:text-left`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
        <Button
          className={`relative md:absolute z-10 bg-white p-3 sm:p-4 md:p-5 text-xs sm:text-sm md:text-base cursor-pointer md:top-90 md:left-250`}
        >
          Conheça meu trabalho
        </Button>
      </section>
      <Products />
      <HowItWorks />
      <About />
      <Footer />
    </main>
  );
}
