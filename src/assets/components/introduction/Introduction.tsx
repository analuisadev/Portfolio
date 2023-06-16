import * as styled from './styles'
import image from '../../img/javascript-frameworks-animate.svg'
import { Typewriter } from '../../typewritter/TypeWritter'

export function Introduction() {
    return (
        <>
            <styled.Section>
                <styled.MyIntroduction>
                    <Typewriter text="Olá, eu sou Ana Luisa :)" />
                    <p>Desenvolvedora Front-End</p>
                    <styled.Buttons>
                        <styled.DownloadCv><a href="https://drive.google.com/file/d/11hMMn85XG6cLwYoGs9YRZDWJ6UtHDQcG/view?usp=share_link" target='_blank'>Download CV</a></styled.DownloadCv>
                        <styled.ContactMe><a href='https://wa.me/5571983892098' target='_blank'>Entrar em contato</a></styled.ContactMe>
                    </styled.Buttons>
                </styled.MyIntroduction>

                <img src={image} alt="Introduction Image" />
            </styled.Section>
        </>
    )
}