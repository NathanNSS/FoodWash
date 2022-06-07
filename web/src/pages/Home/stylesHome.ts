import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerHero = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContentHero = styled.div`
    max-width: 540px;
`

export const TitleHero = styled.h1`
    font-family: ${theme.fonts.Nunito};
    font-weight: 800;
    font-size: 58px;
    line-height: 76px;
    margin-bottom: 20px;
    & b{
        font-weight: 800;
        color: ${theme.colors.prymary};
    }
`

export const TextHero = styled.p`
    max-width: 435px;
    font-family: ${theme.fonts.Roboto};
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    color:${theme.colors.text};
    margin-bottom: 50px;
`
export const ButtonHero = styled.div`
    display: flex;
    align-items: center;
    & button:first-child{
        margin-right: 32px;
    }
`

export const ImgHero = styled.div`
    max-width: 830px;
`

export const ContainerChefs = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const FigureChef = styled.figure`
    display: flex;
    flex-flow: column;
    text-align: center;
    & div{
        position: relative;
        background-color: rgba(225, 30, 32, 0.6);
        bottom:80px;
        border-radius: 4px ;
        border-end-end-radius: 10px;
        padding: 10px 0;
        font-family: ${theme.fonts.Nunito};
        color: white;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        & figcaption:last-child{
            font-size: 14px;
            opacity: 0.5;
        }
    }
`

export const ContainerHowWorks = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 110px;
`