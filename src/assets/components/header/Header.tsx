import { HamburgerMenu } from "./Menu-Mobile/MobileMenu"
import { Menu } from "./styles"

export function Header() {
    return (
        <>
            <Menu>
                <span>Ana Luisa</span>
                <nav>
                    <HamburgerMenu/>
                    <ul>
                        <li><a href="#about">Sobre mim</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#skills">Minhas skills</a></li>
                        <li><a href="#tools">Ferramentas</a></li>
                    </ul>
                </nav>
            </Menu>
        </>
    )
}