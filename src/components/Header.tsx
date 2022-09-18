import Logo from '../../public/logo-desktop.svg'

export const Header = () => {
    return (
        <header className="w-[918px] h-[50px] flex mt-12 m-auto items-center justify-between">
            <img
                src={Logo}
                alt="Logo Rocketseat"
                className="w-[43.06px] h-[50px] cursor-pointer"
            />
            <nav>
                <ol className="text-white flex gap-10">
                    <li className="transition-all hover:font-bold"><a href="">Menu</a></li>
                    <li className="transition-all hover:font-bold"><a href="">Home</a></li>
                    <li className="transition-all hover:font-bold"><a href="">Recompensas</a></li>
                    <li className="transition-all hover:font-bold"><a href="">Gift Cards</a></li>
                    <li className="transition-all hover:font-bold"><a href="">Lojas</a></li>
                </ol>
            </nav>
            <button className="bg-transparent text-white border border-[#8257E5] rounded px-8 py-3 text-xs hover:bg-[#8257E5] hover:font-bold transition-all">
                PEGAR MEU CAFÉ
            </button>
        </header>
    )
}