import leftBottomBlur from '../../public/blur-1.png'
import rightTopBlur from '../../public/blur-2.png'

export const Background = () => {
    return (
        <div className="w-[100vw] h-[100vh] -z-10 absolute top-0 left-0 right-0">
            <img
                src={rightTopBlur}
                alt="Blur"
                className="w-[900px] h-[900px] absolute top-0 right-0 sm:hidden"
            />
            <img
                src={leftBottomBlur}
                alt="Blur"
                className="w-[900px] h-[900px] absolute bottom-0 left-0 sm:bottom-[-30%]"
            />
        </div>
    )
}