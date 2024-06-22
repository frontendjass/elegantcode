import mockup from '../assets/macbook-mockup.avif';
import Role from './Role';

export default function Project({ direction, number, title }) {
    return (
        <article>
            <header className={`flex justify-between items-baseline px-5 py-2 ${direction}`}>
                <h3 className="text-4xl text-shark-950 font-playFair">{title}</h3>
                <sm className='font-lora text-9xl'>{number}.</sm>
            </header>
            <div className='p-5'>
                <img src={mockup} alt='a website mockup'/>
                <ul className='flex gap-2 mt-3'>
                    <Role roleTitle='Development'/>
                    <Role roleTitle='Design'/>
                    <Role roleTitle='Deployment' />
                </ul>
            </div>
        </article>
    )
}