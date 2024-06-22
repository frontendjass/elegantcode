export default function NavbarLink({ name, link, onClick }) {
    return (
        <li className="my-2 md:my-0"><a href={link} onClick={onClick} className="text-2xl uppercase font-playFair md:text-sm">{name}</a></li>
    )
}