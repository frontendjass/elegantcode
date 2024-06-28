import FormButton from './FormButton';

import formArt from '../assets/form-photo.png';

import { motion } from 'framer-motion';

export default function ContactMe() {
  const inputStyle = 'w-full p-2 my-1 font-lora rounded-md';

  return (
    <motion.section
      initial={{ y: 0 }}
      whileInView={{ y: -50 }}
      transition={{ type: 'spring' }}
      className='bg-swirl-200 md:flex'
      id='contact'
    >
      <div className='bg-swirl-100 rounded-t-3xl md:px-10 py-5'>
        <div className='md:flex items-center'>
          <div className='lg:w-2/4'>
            <header className='px-5 pt-9'>
              <h2 className='font-lora uppercase text-shark-950 text-5xl mb-2'>
                Let's Talk
              </h2>
              <p className='text-shark-950 font-lora'>
                If you have any questions, comments, or project inquiries,
                please don't hesitate to get in touch. Your
                message is important, and I look forward to connecting with you.
                Thank you!
              </p>
            </header>
            <form className='p-5'>
              <div>
                <label htmlFor='fullName' className='hidden'>
                  Full Name
                </label>
                <input
                  id='fullName'
                  name='fullName'
                  type='text'
                  placeholder='Full name'
                  className={inputStyle}
                />
              </div>
              <div>
                <label htmlFor='email' className='hidden'>
                  Full Name
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='E-mail'
                  className={inputStyle}
                />
              </div>
              <div className='mt-4'>
                <h4 className='text-shark-850 text-3xl font-lora mb-2'>
                  I need:
                </h4>
                <div className='grid grid-cols-3 gap-4 grid-rows-2 md:grid-cols-4'>
                  <FormButton buttonText='A Website' />
                  <FormButton buttonText='A Redesign' />
                  <FormButton buttonText='React Integration' />
                  <FormButton buttonText='Animate React App' />
                  <FormButton buttonText='UX/UI Design' />
                  <FormButton buttonText='SEO' />
                  <FormButton buttonText='HTML Emails' />
                  <FormButton buttonText='Something Else' />
                </div>
              </div>
              <div className='mt-4'>
                <h4 className='text-shark-850 text-3xl font-lora mb-2'>
                  Tell me about your vision:
                </h4>
                <textarea
                  className='w-full min-h-40 p-2 font-lora rounded-md'
                  placeholder='Describe your project goals, ideas, and desired outcomes. Feel free to share any specific requirements or inspirations.'
                ></textarea>
              </div>
              <div className='flex justify-end mt-2'>
                <button className='text-sm bg-shark-950 text-swirl-50 p-2 rounded-md font-lora w-24 h-12'>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className='hidden lg:block w-2/4'>
            <img src={formArt} alt='A man reading emails' />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
