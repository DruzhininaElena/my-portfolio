import React, {useEffect, useState} from 'react';
import {S} from '../HeaderMenu_Styles.ts';


export const Menu: React.FC = () => {

    const menuItems: string[] = ['About', 'Skills', 'Projects', 'Testimony', 'Contacts']
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;

        const sectionPositions = menuItems.map((item) => {
            const section = document.getElementById(item.toLowerCase());
            return section ? section.offsetTop : 0;
        });

        const currentIndex = sectionPositions.findIndex((pos, index) => {
            return scrollY >= pos && (index === sectionPositions.length - 1 || scrollY < sectionPositions[index + 1]);
        });

        setActiveIndex(currentIndex);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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




