import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import MenuItem from './MenuItem';

export default function Navbar() {
    return (
        <Segment raised style={{borderRadius: "0%", margin: "0%"}}>
            <Menu borderless style={{border: "0px", boxShadow: "none"}}>
                <Menu.Item style={{width: "30%", borderLeft: '1px solid teal', borderRadius: "0%"}}>
                    <p id='logotext'>Belgrade Guided Tours</p>
                </Menu.Item>

                <MenuItem text='Pocetna' icon='home' to='/'/>
                <MenuItem text='Ture' icon='travel' to='/tours'/>
                <MenuItem text='O nama' icon='info' to='aboutus' />
                <MenuItem text='Kontakt' icon='phone' to='/contact' />

                <Menu.Item style={{width: "30%", textAlign: "center"}}>

                </Menu.Item>
            </Menu>
        </Segment>
    )
}
