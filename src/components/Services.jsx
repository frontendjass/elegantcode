import Service from './Service';

export default function Services() {
  return (
    <section className='bg-shark-950 rounded-t-3xl'>
      <header className='pl-5 pt-9'>
        <h2 className='font-lora uppercase text-swirl-200 text-5xl'>
          What I offer
        </h2>
      </header>
      <div className='p-5'>
        <Service title='Frontend Development'/>
        <Service title='Responsive Web Design'/>
        <Service title='UI/UX Design'/>
        <Service title='Website Optimization'/>
      </div>
    </section>
  );
}
