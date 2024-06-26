import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [percentage, setPercentage] = useState(15);
  const [percentageY, setPercentageY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(percentage + 5);
        setPercentageY(percentageY + 2);
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [percentage, percentageY]);

  return (
    <div className='w-screen h-screen bg-shark-950'>
      <div className='w-full h-full flex justify-center items-center'>
        <motion.h2
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: percentage === 100 ? 0 : 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
          className='text-swirl-200 text-5xl md:text-9xl font-playFair'
        >
          Elegant<span className='font-bold'>Code</span>{' '}
          <motion.span
            animate={{ y: -percentageY }}
            transition={{type: 'spring'}}
            className='text-swirl-300 text-xl inline-block'
          >
            {percentage}%
          </motion.span>
        </motion.h2>
      </div>
    </div>
  );
}
