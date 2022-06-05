import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Link } from 'react-router-dom';

interface IActive {
    $ativo?: boolean ;
}

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position:  fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
    margin-bottom: 180px;
    background-color:  #FFF;
`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`
export const Lista = styled.ul`
    display: flex;
    align-items: center;
`

export const ItemLista = styled.li<IActive>`
    margin-right: 15px;
`

export const Links = styled(Link)<IActive>`
    font-family: ${theme.fonts.Roboto};
    font-weight: 400;
    font-size: 16px;
    color: ${props => props.$ativo ? theme.colors.prymary : theme.colors.text};
    padding: 15px 25px;
    text-decoration: unset;
    &:hover{
        background-color: rgba(0,0,0,0.04);
    }
`