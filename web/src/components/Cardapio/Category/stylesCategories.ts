import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ICategory {
    ativo: boolean;
}

export const Container = styled.div<ICategory>`
    display: flex;
    max-width: 255px;
    height: 72px;
    ${ props => props.ativo && 'padding: 1px 28px'};
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin-right: 50px;
    margin-bottom: 5px;
    background-color: ${ props => props.ativo && theme.colors.prymary};
    cursor: pointer;
    & span{
        font-family: ${theme.fonts.Roboto};
        font-weight: 600;
        font-size: 18px;
        text-transform: capitalize;
        margin-left: 11px;
        white-space: nowrap;
        color: ${ props => props.ativo && '#FFF'};;
    }
`

export const  ContainerIMG = styled.div<ICategory>`
    display: flex;
    width:68px;
    height: 68px;
    justify-content: center;
    align-items: center;
    ${ props => props.ativo && 'width:60px; height: 60px;'};
    border: ${ props => props.ativo ? 'none' :' 1px solid #8E8989'};
    ${ props => props.ativo && 'background-color:#FFF'};
    border-radius: 34px;
    & img{
        position: relative;
        width: 70%;
    }
`
