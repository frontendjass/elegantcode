import Project from './Project';

import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <motion.section
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ type: 'spring' }}
      className='bg-swirl-200 rounded-t-3xl pb-24 py-5 md:px-10'
      id='portfolio'
    >
      <header className='pl-5 pt-9'>
        <h2 className='font-lora uppercase text-5xl text-shark-950'>
          Portfolio
        </h2>
      </header>
      <div className='md:grid md:grid-cols-2 mt-14'>
        <Project number='1' title='Serenity' />
        <Project number='2' title='Luminous' />
        <Project number='3' title='The Coffee Store' />
      </div>
    </motion.section>
  );
}
