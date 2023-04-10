import { Menu } from "./styles"

export function Header() {
    return (
        <>
            <Menu>
                <span>Portfólio</span>
                <nav>
                    <ul>
                        <li><a href="#">Sobre mim</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Minhas skills</a></li>
                    </ul>
                </nav>
            </Menu>
        </>
    )
}