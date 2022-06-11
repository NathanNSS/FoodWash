import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IButton {
    outLine?: boolean;
    buttonCart?: boolean;
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
    ${props => props.buttonCart && `
        padding: 11px 20px;
        font-size:14px;
        font-weight: 600;
        letter-spacing: 0.5px;
        border-radius:10px;
    `}
    &:hover{
        ${props => props.outLine && `
            ${!props.buttonCart && `padding: 15px 44px;`}
            border: ${!props.outLine ? `1px solid ${theme.colors.prymary}` : 'none'};
            background-color: ${!props.outLine ? '#FFF' : theme.colors.prymary};
            color: ${!props.outLine ? theme.colors.prymary : '#FFF'};
        `}
        
    }
`

