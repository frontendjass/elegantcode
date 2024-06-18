import FormButton from './FormButton';

export default function ContactMe() {
  const inputStyle = 'w-full p-2 my-1 font-lora';

  return (
    <section className='bg-swirl-200 '>
      <div className='bg-swirl-100 rounded-t-3xl'>
        <header className='px-5 pt-9'>
          <h2 className='font-lora uppercase text-shark-950 text-5xl'>
            Let's Talk
          </h2>
          <p className='text-shark-950 font-lora'>
            If you have any questions, comments, or project inquiries, please
            don't hesitate to get in touch. Fill out the contact form below, and
            I'll get back to you as soon as possible. Your message is important,
            and I look forward to connecting with you. Thank you!
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
            <h4 className='text-shark-850 text-3xl font-lora mb-2'>I need:</h4>
            <div className='grid grid-col-4 grid-flow-col gap-4 grid-rows-2'>
              <FormButton buttonText='A Website' />
              <FormButton buttonText='React Integration' />
              <FormButton buttonText='SEO' />
              <FormButton buttonText='UX/UI Design' />
              <FormButton buttonText='HTML Emails' />
              <FormButton buttonText='A Redesign' />
              <FormButton buttonText='Something Else' />
            </div>
          </div>
          <div className='mt-4'>
            <h4 className='text-shark-850 text-3xl font-lora mb-2'>
              Tell me about your vision:
            </h4>
            <textarea className='w-full h-52'></textarea>
          </div>
          <div className='flex justify-end mt-2'>
            <button className='text-sm bg-shark-950 text-swirl-50 p-2 rounded-md font-lora w-24 h-12'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
