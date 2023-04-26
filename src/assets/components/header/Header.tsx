import { Menu } from "./styles"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export function Header() {

    return (
        <>
            <Menu>
                <span>Ana Luisa</span>
                <nav>
                    <HamburgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
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