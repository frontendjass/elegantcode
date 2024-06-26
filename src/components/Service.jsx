import { motion } from 'framer-motion';

export default function Service({ title, description, benefits }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ type: 'spring', opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <article className='mt-2 h-full'>
        <h3 className='text-4xl text-swirl-200 font-lora'>{title}</h3>
        <p className='text-xl font-lora text-swirl-200 mt-2'>{description}</p>
        <div className='mt-2'>
          <h3 className='text-swirl-50 font-lora'>Benefits:</h3>
          <ul className='m-3'>
            {benefits.map((benefit, index) => (
              <li key={index} className='text-swirl-300 font-lora'>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className=' bg-swirl-200 w-full h-[2px] my-3 md:hidden'></div>
      </article>
    </motion.li>
  );
}
