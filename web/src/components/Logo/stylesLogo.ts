import styled from "styled-components";
import { theme } from "../../styles/theme";

interface IActive {
    ativo?: boolean;
    off?: boolean;
    size?: string;
}

export const SLogo = styled.span<IActive>`
    font-family: ${theme.fonts.Nunito};
    font-weight: 700;
    font-size: 30px;
    font-size: ${props => props.size?.length ?  props.size : '30px'};
    color: ${props => props.ativo ?  theme.colors.prymary : '#000'};
    color: ${props => props.off === true &&  '#fff' };
`