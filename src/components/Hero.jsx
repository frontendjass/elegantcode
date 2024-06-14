import arrowDown from '../assets/arrowDown.svg';

export default function Hero() {
  return (
    <section>
      <div className='h-[80vh] w-full flex justify-center items-center'>
        <div className='relative w-[90vw] h-[90vw] sm:w-[60vw] sm:h-[60vw] lg:w-[30vw] lg:h-[30vw] rounded-full bg-swirl-200 flex flex-col justify-center items-center'>
          <h2 className='absolute top-8 right-4 font-lora italic'>
            Frontend Developer <br /> & Designer
          </h2>
          <h1 className='text-center text-shark-950 uppercase text-5xl font-lora font-bold'>
            Simplicity is the Ultimate Sophistication
          </h1>
          <p className='text-center text-shark-950 px-6 font-lora italic'>
            Crafting elegant web experiences with a focus on{' '}
            <strong className='italic'>clarity</strong> and{' '}
            <strong className='italic'>usability</strong>.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="font-lora uppercase">Discover my work</span>
        <img src={arrowDown} alt="Arrow down"/>
      </div>
    </section>
  );
}
