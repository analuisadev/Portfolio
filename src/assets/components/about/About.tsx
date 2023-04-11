import { AboutMe, Social, SocialContainer } from "./styles";
import { LinkedinLogo, EnvelopeSimple, Phone, BehanceLogo, GithubLogo } from "@phosphor-icons/react";

export function About() {
    return (
        <>
            <AboutMe>
                <h2>Sobre mim</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </AboutMe>

            <Social>
                <SocialContainer>
                    <LinkedinLogo size={32} color="var(--Green)" />
                    <span>LinkedIn</span>
                    <p>Ana Luisa</p>
                </SocialContainer>

                <SocialContainer>
                    <EnvelopeSimple size={32} color="var(--Green)" />
                    <span>E-mail</span>
                    <p>contato.analuisadev@gmail.com</p>
                </SocialContainer>

                <SocialContainer>
                    <BehanceLogo size={32} color="var(--Green)"/>
                    <span>Behance</span>
                    <p>analuisa95</p>
                </SocialContainer>

                <SocialContainer>
                    <GithubLogo size={32} color="var(--Green)"/>
                    <span>GitHub</span>
                    <p>analuisadev</p>
                </SocialContainer>

                <SocialContainer>
                    <Phone size={32} color="var(--Green)" />
                    <span>Telefone</span>
                    <p>+55 71 98684-0756</p>
                </SocialContainer>

            </Social>
        </>
    )
}