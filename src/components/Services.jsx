import Service from './Service';
import serviceData from '../data/serviceData';

export default function Services() {
  return (
    <section className='bg-shark-950 rounded-t-3xl'>
      <header className='pl-5 pt-9'>
        <h2 className='font-lora uppercase text-swirl-200 text-5xl'>
          What I offer
        </h2>
      </header>
      <ul className='p-5'>
        {serviceData.map((service, index) => (
          <Service
            title={service.title}
            description={service.description}
            key={index}
          />
        ))}
      </ul>
    </section>
  );
}
