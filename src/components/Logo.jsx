import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, type: 'spring', stiffness: 50 }}
      className='font-playFair font-[400] text-2xl'
    >
      Elegant<span className='font-bold'>Code</span>
    </motion.span>
  );
}
