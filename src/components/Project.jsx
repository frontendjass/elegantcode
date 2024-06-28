import mockup from '../assets/macbook-mockup.avif';
import Role from './Role';

import { motion } from 'framer-motion';

export default function Project({ number, title }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', delay: 0.2, y: 0, duration: 2 }}
      className='m-2'
    >
      <header
        className={`flex flex-row-reverse justify-between items-baseline px-5 py-2`}
      >
        <h3 className='text-4xl text-shark-950 font-playFair'>{title}</h3>
        <sm className='font-lora text-9xl'>{number}.</sm>
      </header>
      <div className='p-5 flex flex-col gap-2'>
        <img src={mockup} alt='a website mockup' className='rounded-md'/>
        <ul className='flex gap-2 mt-3'>
          <Role roleTitle='Development' />
          <Role roleTitle='Design' />
          <Role roleTitle='Deployment' />
        </ul>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
    </motion.article>
  );
}
