import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IButton {
    outLine?: boolean;
}

export const Container = styled.button<IButton>`
    border: ${props => props.outLine ? `1px solid ${theme.colors.prymary}` : 'none'};
    border-radius: 4px;
    color: ${props => props.outLine ? theme.colors.prymary : '#FFF'};
    background-color: ${props => props.outLine ? '#FFF' : theme.colors.prymary};
    padding: 14px 43px;
    font-family: ${theme.fonts.Roboto};
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        ${props => props.outLine &&`
            padding: 15px 44px;
            border: ${!props.outLine ? `1px solid ${theme.colors.prymary}` : 'none'};
            background-color: ${ !props.outLine ? '#FFF' : theme.colors.prymary};
            color: ${!props.outLine ? theme.colors.prymary : '#FFF'};
        `}
        
    }
`

