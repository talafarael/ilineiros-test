import * as React from 'react';
import Divider from '@mui/material/Divider';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

import Toolbar from '@mui/material/Toolbar';
import Link from "next/link";


const SideBar = () => {
    return (
        <>
            <Toolbar/>
            <Divider/>
            <List>
                <Link href={`/`}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'qwe'}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link href={`/`}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'qwe'}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link href={`/`}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'qwe'}/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </>
    );
};

export default SideBar;
