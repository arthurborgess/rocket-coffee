import './index.css';
import { Background } from './components/Background';
import { Header } from './components/Header';
import RocketCoffee from '../public/rocket-coffee.png'

export const App = () => {
  return (
    <>
      <Background />
      <Header />
      <div className="mt-24 m-auto text-white flex flex-col items-center text-8xl font-bold gap-4">
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