import { SkillsContainer, ListOfSkills, Skill } from "./styles";
import html from '../../../img/html.svg'
import css from '../../../img/css.svg'
import js from '../../../img/javascript.svg'
import rectjs from '../../../img/react-js.svg'
import styledComponents from '../../../img/styled-components.svg'
import sass from '../../../img/sass.svg'


export function Skills() {
    return (
        <>
            <SkillsContainer>
                <h2>Minhas skills</h2>

                <ListOfSkills>
                    <Skill>
                        <img src={html} alt="HTML Skill" />
                    </Skill>

                    <Skill>
                        <img src={css} alt="CSS Skill" />
                    </Skill>

                    <Skill>
                        <img src={js} alt="JavaScript Skill" />
                    </Skill>

                    <Skill>
                        <img src={styledComponents} alt="Styled Components Skill" />
                    </Skill>

                    <Skill>
                        <img src={sass} alt="SASS Skill" />
                    </Skill>

                    <Skill>
                        <img src={rectjs} alt="ReactJS Skill" />
                    </Skill>

                </ListOfSkills>
            </SkillsContainer>
        </>
    )
}