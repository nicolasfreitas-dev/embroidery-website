import { Button } from "@base-ui/react/button";

export default function Footer() {
  const bordado = "/bordado-img.jpg";
 
  return (
    <footer className="w-full flex flex-col sm:flex-row gap-6 sm:gap-4 items-center justify-between px-4 sm:px-8 md:px-20 py-6 sm:py-8 bg-[#E5C289]">
      <div className="shrink-0">
        <img 
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain" 
          src={bordado} 
          alt="Logo Gabi Bordadeira" 
        />
      </div>
      
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
        <Button className="bg-white hover:bg-gray-100 text-gray-800 p-3 sm:p-4 md:p-6 text-xs sm:text-sm font-semibold w-full sm:w-auto transition-colors">
          INSTAGRAM
        </Button>
        <Button className="bg-white hover:bg-gray-100 text-gray-800 p-3 sm:p-4 md:p-6 text-xs sm:text-sm font-semibold w-full sm:w-auto transition-colors">
          WHATSAPP
        </Button>
      </div>
    </footer>
  );
}