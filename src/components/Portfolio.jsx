import Project from './Project';

export default function Portfolio() {
  return (
    <section className='bg-swirl-200 rounded-t-3xl py-5' id='portfolio'>
      <header className='pl-5 pt-9'>
        <h2 className='font-lora uppercase text-5xl text-shark-950'>
          Portfolio
        </h2>
      </header>
      <div className='md:grid md:grid-cols-2 mt-14'>
        <Project number='1' title='Serenity' />
        <Project number='2' title='Luminous' />
        <Project number='3' title='The Coffee Store' />
      </div>
    </section>
  );
}
