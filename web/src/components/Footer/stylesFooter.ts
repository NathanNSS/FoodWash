import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Rodape = styled.footer`
    position: relative;//trocar position: ;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 650px;
    background-color: ${theme.colors.bg_preto};
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto auto ;
    align-items: flex-start;
    min-width: 1300px;
    max-height: 550px;
    margin:  0 auto;
    //border: 1px solid #fff;
    color:#fff;
`

export const NewsLetter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 30px;
    //width: 100%;
    border: 1px solid #535750;
    grid-column: 1/5;;
`
export const LabelNL = styled.h1`
    font-family: ${theme.fonts.Nunito};
    font-weight: 600;
    font-size: 42px;
    color: #fff;
`
export const InputNL = styled.input`
    width: 400px;
    height: 30px;
    border: none;
    border-bottom: 1px solid #B7BDBE;
    background-color: transparent;
`
export const TitleContent = styled.div`
    margin: 30px 0;
    font-family: ${theme.fonts.Nunito};
    font-weight: 600;
    font-size: 30px;
`
export const ContainerText = styled.div`
    max-width: 270px;
    font-family: ${theme.fonts.Roboto};
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: ${theme.colors.text};
    margin-bottom: 23px;
`

export const SocialMedia = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
`

export const Item = styled.li`
    margin-bottom: 23px;
`

export const ContentLinks = styled(Link)`
    font-family: ${theme.fonts.Nunito};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-decoration: none;
    color: #FAF9F9;
    opacity: 90%;
    text-align: start;
    
`

export const ContentLinksI = styled(ContentLinks)`
    display: flex;
    align-items: center;
    font-family: ${theme.fonts.Nunito};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-decoration: none;
    color: #FAF9F9;
    opacity: 90%;
    & svg{
        margin-right: 12px;
    }
`

export const Copyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    color: #FFF;
    font-family: ${theme.fonts.Roboto};
    font-size:16px;
    font-weight: 400;
    margin: 45px auto 30px auto;
    & span:first-child{
        margin-left: 5px;
    }
`