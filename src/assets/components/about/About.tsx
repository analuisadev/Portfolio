import { AboutMe, Social, SocialContainer } from "./styles";
import { LinkedinLogo, EnvelopeSimple, Phone, BehanceLogo, GithubLogo } from "@phosphor-icons/react";

export function About() {
    return (
        <>
            <AboutMe>
                <h2 id="about">Sobre mim</h2>
                <p>Apaixonada pelo universo do desenvolvimento de software, 
                    formada em Análise e Desenvolvimento de Sistemas,
                    focada na expertise de Front-End entusiasta a UI Desing e 
                    criadora de conteúdo sobre tecnologia e programação no Instagram.
                    Amo aprender coisas novas, constantemente melhorando minhas habilidades
                    e sempre atenta as novidades no mundo da tecnologia.
                    </p>
            </AboutMe>

            <Social>
                <SocialContainer>
                    <LinkedinLogo size={32} color="var(--Cyan)" />
                    <span>LinkedIn</span>
                    <p>Ana Luisa</p>
                </SocialContainer>

                <SocialContainer>
                    <EnvelopeSimple size={32} color="var(--Cyan)" />
                    <span>E-mail</span>
                    <p>contato.analuisadev@gmail.com</p>
                </SocialContainer>

                <SocialContainer>
                    <BehanceLogo size={32} color="var(--Cyan)"/>
                    <span>Behance</span>
                    <p>analuisa95</p>
                </SocialContainer>

                <SocialContainer>
                    <GithubLogo size={32} color="var(--Cyan)"/>
                    <span>GitHub</span>
                    <p>analuisadev</p>
                </SocialContainer>

                <SocialContainer>
                    <Phone size={32} color="var(--Cyan)" />
                    <span>Telefone</span>
                    <p>+55 71 98684-0756</p>
                </SocialContainer>

            </Social>
        </>
    )
}