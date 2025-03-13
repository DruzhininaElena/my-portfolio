import React, {useState} from 'react';
import {tabItemsType, tabStatusType} from '../ProjectsData.ts';
import {S} from './TabsMenu_Styles.ts';

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

        <S.StyledTabMenu>
            <ul>
                {tabItems.map((tab) =>
                    <S.TabItem key={tab.id}>
                        <S.LinkTab onClick={() => {
                            changeActiveIndex(tab.id);
                            changeFilterStatus(tab.status)
                        }}
                                 className={activeIndex === tab.id ? 'active' : ''}>
                            {tab.title}
                        </S.LinkTab>
                    </S.TabItem>
                )}
            </ul>
        </S.StyledTabMenu>
    );
};


