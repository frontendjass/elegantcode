export default function NavbarLink({ name, link }) {
    return (
        <li className="my-2"><a href={link} className="text-2xl uppercase font-playFair">{name}</a></li>
    )
}