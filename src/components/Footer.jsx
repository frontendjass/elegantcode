import NavbarLink from "./NavbarLink";

export default function Footer() {
    return (
        <footer className="h-24 flex items-center justify-between">
            <p className="text-swirl-50">© 2024 ElegantCode</p>
            <nav>
                <ul className="flex">
                <NavbarLink name='About' link='#'/>
                <NavbarLink name='Services' link='#'/>
                <NavbarLink name='Portfolio' link='#'/>
                <NavbarLink name='Contact Me' link='#'/>
                </ul>
            </nav>
        </footer>
    )
}