import { SkillsContainer, ListOfSkills, Skill } from "./styles";
import styledComponents  from '../../../../public/styled-components-logo.png'

export function Skills() {
    return (
        <>
            <SkillsContainer>
                <h2 id="skills">Minhas skills</h2>

                <ListOfSkills>
                    <Skill>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 Skill" />
                    </Skill>

                    <Skill>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3 Skill" />
                    </Skill>

                    <Skill>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Skill" />
                    </Skill>

                    <Skill>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS Skill" />
                    </Skill>

                    <Skill>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS Skill" />
                    </Skill>

                    <Skill>
                        <img src={ styledComponents } alt="Styled Components Skill" />
                    </Skill>

                    <Skill>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Skill" />
                    </Skill>

                </ListOfSkills>
            </SkillsContainer>
        </>
    )
}