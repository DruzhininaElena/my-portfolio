import React, {useState} from 'react';
import {S} from '../HeaderMenu_Styles.ts';


export const Menu: React.FC = () => {

    const menuItems: string[] = ['About', 'Skills', 'Projects', 'Testimony', 'Contacts']
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <S.MenuList>
            {menuItems.map((item, index) =>
                <li key={index}
                    onClick={() => handleClick(index)}>
                    <S.NavLink href={`#${item.toLowerCase()}`}
                               className={activeIndex === index ? 'active' : ''}>
                        {item}
                    </S.NavLink>
                </li>
            )}
        </S.MenuList>
    );
};




