import {theme} from '../../../styles/Theme.ts';
import styled, {css} from 'styled-components';

const MenuList = styled.ul`
    font-family: "Raleway", sans-serif;
    display: flex;
    gap: 48px;
    font-weight: 500;
    line-height: 1.5;

    font-size: 18px;
    color: ${theme.colors.primaryFont};
`

const NavLink = styled.a`
    position: relative;
    text-decoration: none;
    
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background-color: ${theme.colors.primaryFont};
        bottom: -4px;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .25s ease-in-out;
    }

    &:hover::before, &.active::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`

// mobile--------------------------------------------------------------------------------

const MobileMenuPopup = styled.div<{$isOpen: boolean}>`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(#FDC435, #737373);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    transition: 0.75s ease;


    ${props => props.$isOpen && css<{ $isOpen: boolean }>`
        transform: translateY(0);
    `}
    ul {
        font-size: 34px;
        color: ${theme.colors.primaryBg};

        flex-direction: column;
        align-items: center;

        @media ${theme.media.mobile} {
            font-size: 28px;
        }

        li {
            ${NavLink} {
                &::before {
                    background-color: ${theme.colors.primaryBg};
                }
            }
        }
    }

`

const BurgerButton = styled.div<{$isOpen: boolean}>`
    width: 30px;
    height: 30px;
    position: fixed;
    top: 16px;
    right: 30px;
    cursor: pointer;
    z-index: 30;

    span {
        display: block;
        width: 100%;
        height: 2px;
        border-radius: 3px;
        background-color: #000;

        position: absolute;
        top: 12px;
        z-index: 30;

        transition: all 0.3s ease;

        &::before, &::after {
            display: block;
            content: '';
            width: 100%;
            height: 2px;
            border-radius: 3px;
            background-color: #000;
            position: absolute;
            z-index: 30;
            transition: all 0.3s ease;
        }

        &::before {
            transform: translateY(8px);

            ${props => props.$isOpen && css<{ $isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                background-color: ${theme.colors.primaryBg}
            `}
        }

        &::after {
            transform: translateY(-8px);

            ${props => props.$isOpen && css<{ $isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                background-color: ${theme.colors.primaryBg}
            `}
        }
    }

    ${props => props.$isOpen && css<{ $isOpen: boolean }>`
        span {
            background-color: rgba(0, 0, 0, 0);
        }
    `}

    @media ${theme.media.mobile} {
        width: 20px;
        height: 20px;
        right: 15px;

        span {
            &::before {
                transform: translateY(5px);

                ${props => props.$isOpen && css<{ $isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
            }

            &::after {
                transform: translateY(-5px);

                ${props => props.$isOpen && css<{ $isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
            }
        }
    }

`

export const S = {
    MenuList,
    NavLink,
    MobileMenuPopup,
    BurgerButton
}