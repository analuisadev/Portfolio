import * as styled from './styles'
import image from '../../../../public/javascript-frameworks-animate.svg'
import Typewriter from '../typewritter/TypeWritter'

export function Introduction() {
    return (
        <>
            <styled.Section>
                <styled.MyIntroduction>
                    <Typewriter text="Olá, eu sou Ana Luisa :)"/>
                    <p>Desenvolvedora Front-End</p>
                    <styled.Buttons>
                        <styled.DownloadCv>Download CV</styled.DownloadCv>
                        <styled.ContactMe>Entrar em contato</styled.ContactMe>
                    </styled.Buttons>
                </styled.MyIntroduction>

                <img src={image} alt="" />
            </styled.Section>
        </>
    )
}