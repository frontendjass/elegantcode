export default function Service({ title, description, benefits }) {
  return (
    <li>
      <article className='mt-2 h-full'>
        <h3 className='text-4xl text-swirl-200 font-lora'>{title}</h3>
        <p className='text-xl font-lora text-swirl-200 mt-2'>{description}</p>
        <ul className="m-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-swirl-300 font-lora">{benefit}</li>
          ))}
        </ul>
        <div className=' bg-swirl-200 w-full h-[2px] my-3 md:hidden'></div>
      </article>
    </li>
  );
}
