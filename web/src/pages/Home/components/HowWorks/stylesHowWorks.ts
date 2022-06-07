import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export interface BgIMG {
    bgColors?: string;
    opacit?: number;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 210px;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-radius: 8px;
`

export const ContainerIMG = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & img{
        z-index: 1;
        position: absolute;
    }
`

export const BgImg = styled.div<BgIMG>`
    width: 93px;
    height: 88px;
    border-radius: 8px;
    background-color: ${props => props.bgColors || '#D94360'};
    opacity: ${props => props.opacit || 0.5};
`

export const Title = styled.h4`
    font-family: ${theme.fonts.Nunito};
    font-size: 25px;
    color: ${theme.colors.bg_preto};
    font-weight: 700;
`

export const Text = styled.p`
    font-family: ${theme.fonts.Roboto};
    font-size: 14px;
    line-height: 22px;
    color: ${theme.colors.text};
`