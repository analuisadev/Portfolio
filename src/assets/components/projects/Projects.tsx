import * as styles from './styles'

import Habits from '../../../img/preview_habits.jpg'
import FocusTimer  from '../../../img/preview_focus-timer.jpg'

export function Projects() {
    return (
        <>
            <styles.ContainerProjects>
                <h2>Projetos</h2>

                <styles.ProjectsBox>
                    <styles.Project>
                        <styles.ProjectImage>
                            <img src={ FocusTimer } alt="Focus Timer Project" />
                        </styles.ProjectImage>
                        <styles.infoProject>
                            <span><a href="https://focus-timer-ecru.vercel.app/" target='_blank'>Focus Timer</a></span>
                            <p>Tecnologias: HTML, CSS e JS.</p>
                        </styles.infoProject>
                    </styles.Project>

                    <styles.Project>
                        <styles.ProjectImage>
                            <img src={ Habits } alt="Habit Tracker Project" />
                        </styles.ProjectImage>
                        <styles.infoProject>
                            <span><a href="https://analuisadev.github.io/habits/" target='_blank'>Habits</a></span>
                            <p>Tecnologias: HTML, CSS e JS.</p>
                        </styles.infoProject>
                    </styles.Project>


                    <styles.Project>
                        <styles.ProjectImage></styles.ProjectImage>
                        <styles.infoProject>
                            <span><a href="#">Título do projeto</a></span>
                            <p>Tecnologias: HTML, CSS e JS.</p>
                        </styles.infoProject>
                    </styles.Project>


                    <styles.Project>
                        <styles.ProjectImage></styles.ProjectImage>
                        <styles.infoProject>
                            <span><a href="#">Título do projeto</a></span>
                            <p>Tecnologias: HTML, CSS e JS.</p>
                        </styles.infoProject>
                    </styles.Project>

                    <styles.Project>
                        <styles.ProjectImage></styles.ProjectImage>
                        <styles.infoProject>
                            <span><a href="#">Título do projeto</a></span>
                            <p>Tecnologias: HTML, CSS e JS.</p>
                        </styles.infoProject>
                    </styles.Project>

                    <styles.Project>
                        <styles.ProjectImage></styles.ProjectImage>
                        <styles.infoProject>
                            <span><a href="#">Título do projeto</a></span>
                            <p>Tecnologias: HTML, CSS e JS.</p>
                        </styles.infoProject>
                    </styles.Project>
                </styles.ProjectsBox>
            </styles.ContainerProjects>
        </>
    )
}