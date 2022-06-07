import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
    display: inline-block;
    width: 100%;
    margin: 110px 0px 50px 0px;
    text-align: center;
`

export const Title = styled.h2`
    font-family: ${theme.fonts.Nunito};
    font-weight: 700;
    font-size: 48px;
    color: ${theme.colors.bg_preto};
`

export const Text = styled.p`
    max-width: 650px;
    margin: 30px auto 0 auto;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.Roboto};
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
`