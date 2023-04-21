import { ListOfTools, Tool, WorkTool } from "./styles";

export function Tools() {
    return (
        <>
            <WorkTool>
                <h2 id="tools">Ferramentas</h2>

                <ListOfTools>
                    <Tool>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Usage tool - Figma" />
                    </Tool>

                    <Tool>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Usage tool - GIT" />
                    </Tool>
                    
                    <Tool>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Usage tool - GitHub" />
                    </Tool>

                    <Tool>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg" alt="Usage tool - Jira" />
                    </Tool>

                    <Tool>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Usage tool - Slack" />
                    </Tool>

                    <Tool>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Usage tool - Linux" />
                    </Tool>

                    <Tool>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Usage Windows 8 - Linux" />
                    </Tool>
                </ListOfTools>
            </WorkTool>
        </>
    )
}