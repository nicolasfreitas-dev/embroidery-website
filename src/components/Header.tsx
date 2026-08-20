export default function Header() {
    return (
        <header className="w-full h-20 flex items-center justify-between fixed top-0 z-20 px-20 border-b border-b-gray-400/30 bg-[#E5C289]">
            <span>LOGOMARCA</span>

            <ul className="flex items-center justify-center gap-10">
                <li className="p-2 cursor-pointer">
                    Home
                </li>
                <li className="p-2 cursor-pointer">
                    Sobre mim
                </li>
                <li className="p-2 cursor-pointer">
                    Como solicitar
                </li>
            </ul>
        </header>
    )
};
