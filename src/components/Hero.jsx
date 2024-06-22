import arrowDown from '../assets/arrowDown.svg';

export default function Hero() {
  return (
    <section className='overscroll-x-none bg-[#F3EEEA] px-5' id='home'>
      <div className='h-[65vh] md:h-[80vh] w-full flex justify-center items-center'>
        <div className='relative w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] lg:w-[40vw] lg:h-[40vw] rounded-full bg-swirl-200 flex flex-col justify-center items-center'>
          <h2 className='absolute top-8 right-4 font-lora italic'>
            Frontend Developer <br /> & Designer
          </h2>
          <h1 className='text-center text-shark-950 uppercase text-4xl font-lora font-bold md:text-7xl md:w-[80vw]'>
            Simplicity is the Ultimate Sophistication
          </h1>
          <p className='text-center text-shark-950 px-6 font-lora italic'>
            Crafting elegant web experiences with a focus on{' '}
            <strong className='italic'>clarity</strong> and{' '}
            <strong className='italic'>usability</strong>.
          </p>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center pb-5 md:flex-row md:justify-between'>
        <div>
          <button className='font-bold'>ENG</button> / <button>ESP</button>
        </div>
        <div className='flex gap-2'>
          <span className='font-lora uppercase'>Discover my work</span>
          <img src={arrowDown} alt='Arrow down' />
        </div>
      </div>
    </section>
  );
}
