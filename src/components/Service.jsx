export default function Service({ title, description }) {
  return (
    <li>
      <article className='mt-2'>
        <h3 className='text-4xl text-swirl-200 font-lora'>{title}</h3>
        <p className='text-xl font-lora text-swirl-200 mt-2'>{description}</p>
        <div className=' bg-swirl-200 w-full h-[2px] my-3'></div>
      </article>
    </li>
  );
}
