import mockup from '../assets/macbook-mockup.avif';

export default function Project() {
    return (
        <article>
            <header className="flex justify-between items-baseline px-5 py-2">
                <h3 className="text-4xl text-shark-950 font-playFair">Serenity</h3>
                <sm className='font-playFair text-9xl'>1.</sm>
            </header>
            <div className='p-5'>
                <img src={mockup}/>
                <p>
                    <sm>Development</sm>
                    <sm>Design</sm>
                    <sm>Deployment</sm>
                </p>
            </div>
        </article>
    )
}