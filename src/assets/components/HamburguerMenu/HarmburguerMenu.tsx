import { slide as Menu } from 'react-burger-menu'
import './style.css'

export default (props: any) => {
    return (
        <Menu right>
            <a className="menu-item" href="#about">
                Sobre mim
            </a>
            <a className="menu-item" href="#projects">
                Projetos
            </a>
            <a className="menu-item" href="#services">
                Serviços
            </a>
            <a className="menu-item" href="#skills">
                Minhas skills
            </a>
            <a className="menu-item" href="#tools">
                Ferramentas
            </a>
        </Menu>
    )
}