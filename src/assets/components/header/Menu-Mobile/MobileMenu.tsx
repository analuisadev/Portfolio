import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuContainer, SmallLine, ThinLine, ThinLineTwo } from "./styles";

type Anchor = 'right';

const listMenu: Array<string> = ['Sobre mim', 'Projetos', 'Serviços', 'Minhas skills', 'Ferramentas'];
const onClickButton: Array<string> = ["right"]


export function HamburgerMenu() {
    const [state, setState] = React.useState({ right: false });

    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        toggleDrawer(onClickButton, true)
    };

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                {listMenu.map((text, index) => (
                    <a key={text} href={
                        (listMenu[index] === "Sobre mim" ? "#about"
                            : listMenu[index] === "Projetos" ? "#projects"
                                : null
                        )
                    }>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* USAR ICONE */}
                                </ListItemIcon>
                                {/* ESTILIZAR A FONT DO MENU */}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </a>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {(onClickButton).map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* ESCOLHER O ICONE DO HAMBURGUER NO LUGAR DO TESTE */}
                    <Button handleClick={handleClick} isOpen={isOpen} onClick={toggleDrawer(anchor, true)}>
                        <IconMenu />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export function IconMenu({ handleClick, isOpen }) {


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