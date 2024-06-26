export default function NavbarLink({ name, link, footer, onClick }) {
    const styleHeader = 'text-2xl uppercase font-playFair';
    const styleFooter = 'text-sm uppercase font-playFair text-swirl-200 md:text-sm';

    return (
        <li className="my-2 md:my-0"><a href={link} onClick={onClick} className={footer ? styleFooter : styleHeader}>{name}</a></li>
    )
}