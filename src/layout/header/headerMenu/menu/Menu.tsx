import React, {useEffect, useState} from 'react';
import {S} from '../HeaderMenu_Styles.ts';


export const Menu: React.FC = () => {

    const menuItems: string[] = ['About', 'Skills', 'Projects', 'Testimony', 'Contacts']
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const maxScrollY = document.documentElement.scrollHeight - window.innerHeight - 1;

        const sectionPositions = menuItems.map((item) => {
            const section = document.getElementById(item.toLowerCase());
            return section ? section.offsetTop - 1 : 0;
        });

        const currentIndex = sectionPositions.findIndex((pos, index) => {
            return scrollY >= pos && (index === sectionPositions.length - 1 || scrollY < sectionPositions[index + 1]);
        });

        if (scrollY > maxScrollY) {
            setActiveIndex(menuItems.length - 1);
        } else setActiveIndex(currentIndex);

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
                <li key={index}>
                    <S.NavLink href={`#${item.toLowerCase()}`}
                               className={activeIndex === index ? 'active' : ''}>
                        {item}
                    </S.NavLink>
                </li>
            )}
        </S.MenuList>
    );
};




