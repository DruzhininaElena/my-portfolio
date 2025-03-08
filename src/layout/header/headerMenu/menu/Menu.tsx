import React from 'react';
import {S} from '../HeaderMenu_Styles.ts';



export const Menu: React.FC = () => {
    return (
        <S.MenuList>
            <li><a href={'#main'}>About</a></li>
            <li><a href={'#projects'}>Projects</a></li>
            <li><a href={'#contacts'}>Contacts</a></li>
        </S.MenuList>
    );
};




