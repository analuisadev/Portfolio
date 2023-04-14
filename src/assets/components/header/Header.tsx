import { Menu, MenuHamburguer } from "./styles"

export function Header() {
    return (
        <>
            <Menu>
                <span>Ana Luisa</span>
                <nav>
                    <MenuHamburguer>

                    </MenuHamburguer>

                    <ul>
                        <li><a href="#about">Sobre mim</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#skills">Minhas skills</a></li>
                    </ul>
                </nav>
            </Menu>
        </>
    )
}