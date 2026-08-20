import { Button } from "@/shared/components/ui/button";
 
export default function About() {
  const bordado = "/bordado-img.jpg";
 
  return (
    <section className="w-full flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 justify-between items-center md:items-start">
      <div className="flex flex-col gap-4 sm:gap-6 items-start w-full md:max-w-md lg:max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          Sobre Gabi Bordadeira
        </h2>
        <p className="text-sm sm:text-base text-justify leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
          ullam, placeat praesentium id deserunt harum deleniti tempore vitae ex
          corrupti atque ut magni cum sed quo neque ad ratione architecto earum
          hic doloribus rerum quidem aperiam. Ipsum alias suscipit quod,
          corrupti at nobis quas totam. Necessitatibus quae incidunt nemo. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quis
          non expedita doloribus nam fugit repudiandae voluptatum sequi ullam
          soluta.
        </p>
        <Button className="bg-[#E5C289] hover:bg-[#d4b273] p-3 sm:p-4 md:p-5 text-sm sm:text-base font-medium transition-colors w-full sm:w-auto">
          Faça seu pedido
        </Button>
      </div>
      
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <img 
          src={bordado} 
          alt="Bordado exemplo" 
          className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}