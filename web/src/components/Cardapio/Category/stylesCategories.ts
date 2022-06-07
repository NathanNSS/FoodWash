import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ICategory {
    ativo: boolean;
}

export const Container = styled.div<ICategory>`
    display: flex;
    width: 260px;
    height: 82px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${ props => props.ativo && theme.colors.prymary};
`
