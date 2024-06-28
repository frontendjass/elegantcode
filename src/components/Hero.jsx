import arrowDown from '../assets/arrowDown.svg';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='overscroll-x-none bg-[#F3EEEA] px-5 md:px-10' id='home'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, type: 'spring', stiffness: 50 }}
        className='h-[65vh] md:h-[80vh] w-full flex justify-center items-center'
      >
        <div className='relative w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] lg:w-[40vw] lg:h-[40vw] rounded-full bg-swirl-200 flex flex-col justify-center items-center'>
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className='absolute top-8 right-4 font-lora italic'
          >
            Frontend Developer <br /> & Designer
          </motion.h2>
          <h1 className='text-center text-shark-950 uppercase text-4xl font-lora font-bold md:text-7xl md:w-[80vw]'>
            "Simplicity is the Ultimate Sophistication"
          </h1>
          <p className='text-center text-shark-950 px-6 font-lora italic'>
            Crafting elegant web experiences with a focus on{' '}
            <strong className='italic'>clarity</strong> and{' '}
            <strong className='italic'>usability</strong>.
          </p>
        </div>
      </motion.div>

      <div className='flex flex-col items-center justify-center pb-5 md:flex-row md:justify-between'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, type: 'spring', stiffness: 50 }}
        >
          <motion.button whileHover={{ scale: 1.1 }} className='font-bold'>
            ENG
          </motion.button>{' '}
          / <motion.button whileHover={{ scale: 1.1 }}>ESP</motion.button>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
          className='flex gap-2 my-2'
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, type: 'spring', stiffness: 50 }}
            className='font-lora uppercase'
          >
            Discover my work
          </motion.span>
          <img src={arrowDown} alt='Arrow down' />
        </motion.div>
      </div>
    </section>
  );
}
