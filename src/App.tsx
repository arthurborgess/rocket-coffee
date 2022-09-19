import { useEffect, useState } from 'react';
import './index.css';
import { Background } from './components/Background';
import { Header } from './components/Header';
import RocketCoffee from '../public/rocket-coffee.png'
import ArrowLeft from '../public/arrow.svg';

export const App = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    handleScreenChange();
  }, []);

  const handleScreenChange = () => {
    if (window.innerWidth >= 901) {
      setMenuIsOpen(true);
      setIsMobile(false);
    }
    if (window.innerWidth <= 900) {
      setMenuIsOpen(false);
      setIsMobile(true);
    }
  }

  window.addEventListener('resize', handleScreenChange);
  return (
    <>
      <Background />
      <Header
        isMobile={isMobile}
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      <div className="mt-6 m-auto text-white flex flex-col items-center text-8xl font-bold gap-4 px-12 sm:text-4xl sm:mt-16">
        {isMobile &&
          <>
            <span className="text-3xl text-center font-extralight tracking-wide leading-10">
              O café que fará seu código decolar para o próximo nível.
            </span>
            <button className="bg-transparent text-white border border-[#8257E5] rounded px-7 py-2 my-8 text-xs hover:bg-[#8257E5] hover:font-bold transition-all gap-3 items-center hidden sm:flex">
              PEGAR MEU CAFÉ
              <img src={ArrowLeft} alt="Arrow Left" />
            </button>
          </>
        }
        <span>
          Great Coffee
        </span>
        <span className="text-black" style={{ WebkitTextStroke: "2px #8257E5 ", fontFamily: "sans-serif" }}>
          {`<Great Code/>`}
        </span>
      </div>
      <img
        src={RocketCoffee}
        alt="Rocket Coffee"
        className="absolute bottom-0 right-[50%] left-[50%] -translate-x-1/2"
      />
    </>
  )
}