import Logo from '../../public/logo-desktop.svg';
import MobileLogo from '../../public/logo-mobile.svg';
import CloseMenu from '../../public/menu-close.svg';
import OpenMenu from '../../public/menu-open.svg';

type Props = {
    isMobile: boolean | undefined;
    menuIsOpen: boolean;
    setMenuIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export const Header = ({ isMobile, menuIsOpen, setMenuIsOpen }: Props) => {

    return (
        <header className="max-w-[1000px] w-[100%] h-[50px] py-20 px-6 flex m-auto items-center justify-between sm:py-12 sm:border-b-[1px] border-[#333]">
            <img
                src={isMobile ? MobileLogo : Logo}
                alt="Logo Rocketseat"
                className="w-[43.06px] h-[50px] sm:w-[171px] sm-[32.78px] cursor-pointer"
            />
            {menuIsOpen &&
                <nav className="sm:absolute sm:left-0 sm:top-[100px] sm:bg-black sm:w-full sm:h-full sm:z-10">
                    <ol className="text-white flex gap-10 sm:flex-col sm:gap-0 sm:text-[#E1E1E6]">
                        <li className="transition-all hover:font-bold sm:px-10 sm:py-5 sm:border-b-[1px] border-[#333] sm:hover:border-l-4 sm:hover:border-l-[#8257E5]">
                            <a href=''>Home</a>
                        </li>
                        <li className="transition-all hover:font-bold sm:px-10 sm:py-5 sm:border-b-[1px] border-[#333] sm:hover:border-l-4 sm:hover:border-l-[#8257E5]">
                            <a href=''>Recompensas</a>
                        </li>
                        <li className="transition-all hover:font-bold sm:px-10 sm:py-5 sm:border-b-[1px] border-[#333] sm:hover:border-l-4 sm:hover:border-l-[#8257E5]">
                            <a href=''>Gift Cards</a>
                        </li>
                        <li className="transition-all hover:font-bold sm:px-10 sm:py-5 sm:border-b-[1px] border-[#333] sm:hover:border-l-4 sm:hover:border-l-[#8257E5]">
                            <a href=''>Menu</a>
                        </li>
                        <li className="transition-all hover:font-bold sm:px-10 sm:py-5 sm:border-b-[1px] border-[#333] sm:hover:border-l-4 sm:hover:border-l-[#8257E5]">
                            <a href=''>Lojas</a>
                        </li>
                    </ol>
                </nav>
            }
            {isMobile &&
                menuIsOpen ?
                <img
                    src={CloseMenu}
                    alt="Close Menu"
                    className="lg:hidden"
                    onClick={() => setMenuIsOpen(false)}
                />
                :
                <img
                    src={OpenMenu}
                    alt="Open Menu"
                    className="lg:hidden"
                    onClick={() => setMenuIsOpen(true)}
                />
            }
            <button className="bg-transparent text-white border border-[#8257E5] rounded px-8 py-3 text-xs hover:bg-[#8257E5] hover:font-bold transition-all sm:hidden">
                PEGAR MEU CAFÉ
            </button>
        </header>
    )
}