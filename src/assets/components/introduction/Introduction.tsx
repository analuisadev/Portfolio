import * as styled from './styles'
import image from '../../../img/javascript-frameworks-animate.svg'

export function Introduction() {
    return (
        <>
            <styled.Section>
                <styled.MyIntroduction>
                    <h1>Olá, Eu sou Ana Luisa :)</h1>
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