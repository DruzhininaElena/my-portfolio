import React, {useState} from 'react';
import styled from 'styled-components';
import {tabItemsType, tabStatusType} from '../ProjectsData.ts';
import {theme} from '../../../../styles/Theme.ts';

type TabMenuPropsType = {
    tabItems: tabItemsType[];
    changeFilterStatus: (value: tabStatusType) => void
}

export const TabMenu: React.FC<TabMenuPropsType> = ({ tabItems, changeFilterStatus }: TabMenuPropsType) => {

    const [activeIndex, setActiveIndex] = useState(1);
    const changeActiveIndex = (index: number) => {
        setActiveIndex(index);
    };

    return (

        <StyledTabMenu>
            <ul>
                {tabItems.map((tab) =>
                    <TabItem key={tab.id}>
                        <LinkTab onClick={() => {
                            changeActiveIndex(tab.id);
                            changeFilterStatus(tab.status)
                        }}
                                 className={activeIndex === tab.id ? 'active' : ''}>
                            {tab.title}
                        </LinkTab>
                    </TabItem>
                )}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
   ul {
       display: flex;
       justify-content: space-between;
       max-width: 250px;
       margin: 0 auto 40px;
       text-transform: uppercase;
       font-weight: 600;
       font-size: 20px;
   }
`

const TabItem = styled.li``

const LinkTab = styled.a`
    &.active {
        color: ${theme.colors.accent};
        font-weight: 700;
    }
`
