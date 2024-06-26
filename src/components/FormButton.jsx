import { motion } from "framer-motion"

export default function FormButton({ buttonText }) {
    return (
        <div>
            <motion.button whileHover={{scale: 1.1}} transition={{type: 'spring', stiffness: 500}} className="text-sm bg-white  p-2 rounded-md font-lora w-24 h-12">{buttonText}</motion.button>
        </div>
    )
}