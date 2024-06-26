import NavbarLink from "./NavbarLink";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between px-5 flex-col sm:flex-row pb-16 md:px-10">
            <nav>
                <ul className="flex gap-2">
                <NavbarLink name='About' link='#' footer/>
                <NavbarLink name='Services' link='#' footer/>
                <NavbarLink name='Portfolio' link='#' footer/>
                <NavbarLink name='Contact Me' link='#' footer/>
                </ul>
            </nav>
            <p className="text-swirl-100">© 2024 ElegantCode</p>
        </footer>
    )
}