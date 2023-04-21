import { useState } from "react";
import { MenuContainer, SmallLine, ThinLine, ThinLineTwo } from "./styles";

export function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <MenuContainer onClick={handleClick}>
                <ThinLine isOpen={isOpen} />
                <ThinLineTwo isOpen={isOpen} />
                <SmallLine isOpen={isOpen} />
            </MenuContainer>
        </>
    );
};
