import Project from "./Project";

export default function Portfolio() {
  return (
    <section className='bg-swirl-200 rounded-t-3xl'>
      <header className='pl-5 pt-9'>
        <h2 className='font-lora uppercase text-5xl text-shark-950'>
          Portfolio
        </h2>
      </header>
      <Project />
      <Project />
      <Project />
    </section>
  );
}
