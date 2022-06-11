import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin: 25px 22px 34px;
`

export const Title = styled.h3`
    font-family: ${theme.fonts.Nunito};
    font-weight: 600;
    font-size: 30px;
    color: ${theme.colors.title_prato};
    text-transform: capitalize;
`

export const Text = styled.p`
    font-family: ${theme.fonts.Roboto};
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.text};
    line-height: 30px;
    text-align: justify;
`
export const Price = styled.span`
    font-family: ${theme.fonts.Nunito};
    font-weight: 600;
    font-size: 22px;
    color: ${theme.colors.prymary};
`

export const ContainerRating = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`