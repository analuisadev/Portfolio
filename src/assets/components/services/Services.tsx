import { Code, Bag, DeviceMobile } from "@phosphor-icons/react";
import * as styles from "./styles";

export function Services() {
    return (
        <>
            <styles.AboutServices>
                <h2 id="services">Serviços</h2>
                <styles.TypesOfServices>
                    <styles.Service>
                        <styles.InfoService>
                            <Code size={32} color="var(--Cyan)" />
                            <p>Criação de sites, blogs e páginas de vendas</p>
                        </styles.InfoService>
                    </styles.Service>

                    <styles.Service>
                        <styles.InfoService>
                            <Bag size={32} color="var(--Cyan)" />
                            <p>Criação de portfólio</p>
                        </styles.InfoService>
                    </styles.Service>

                    <styles.Service>
                        <styles.InfoService>
                            <DeviceMobile size={32} color="var(--Cyan)" />
                            <p>Sites responsivos</p>
                        </styles.InfoService>
                    </styles.Service>
                </styles.TypesOfServices>
            </styles.AboutServices>
        </>
    )
}