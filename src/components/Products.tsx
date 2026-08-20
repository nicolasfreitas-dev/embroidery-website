import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export default function Products() {
  const bordado = "/bordado-img.jpg";

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8">
        Produtos
      </h2>
      
      <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-sm"
        >
          <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
            <CarouselItem className="basis-full pl-2 sm:pl-3 md:pl-4 shrink-0">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={bordado} 
                  alt="imagem de um bordado feito a mão"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-2 sm:pl-3 md:pl-4 shrink-0">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={bordado} 
                  alt="imagem de um bordado feito a mão"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-2 sm:pl-3 md:pl-4 shrink-0">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={bordado} 
                  alt="imagem de um bordado feito a mão"
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <span className="text-lg sm:text-xl md:text-2xl font-medium text-center">
          Linha de bastidores
        </span>
      </div>
    </section>
  );
}