import Service from './Service';
import serviceData from '../data/serviceData';

export default function Services() {
  return (
    <section className='bg-[#F3EEEA]' id='services'>
      <div className='bg-shark-950 rounded-t-3xl py-5 md:h-screen'>
        <header className='pl-5 pt-9'>
          <h2 className='font-lora uppercase text-swirl-200 text-5xl'>
            What I offer
          </h2>
        </header>
        <ul className='p-5 md:grid grid-cols-2 md:gap-4 md:mt-14'>
          {serviceData.map((service, index) => (
            <Service
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              key={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
