import styled from "styled-components";
import { theme } from "../../../../styles/theme";

interface ICardNews {
    main?: boolean
}

export const Container = styled.div<ICardNews>`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 20px 1fr;
    height: 100%;
    & h3{
        font-size: 26px;
        font-family: ${theme.fonts.Nunito};
        font-weight: 600;
        color: ${theme.colors.bg_preto};
        line-height: 35px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        max-height: 75px;      /* fallback */
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
    }
    & img{ 
            grid-column: 1/1;
            grid-row: 1/4;
            width: 13vw;
            object-fit: contain;
            border-radius: 6px;
            margin-right: 24px;
    }
    
    & span{
        background-color: rgb(183, 189, 190);
        height: 1px;
        grid-row: 2/3;
        display: block;
        margin: 20px 0px 30px 0;
    }
    & div{
        display: flex;
        flex-direction: row ;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        font-family: ${theme.fonts.Nunito};
        font-weight: 400;
        color: ${theme.colors.text};
        align-items: flex-end;
        & svg{
            margin-right: 8px;
        }
    }

    ${props => props.main && `
        display: flex;
        flex-direction: column;
        grid-column: 1;
        grid-row: 1/4;
        margin-right: 65px;
       

        & img{
            align-items: start;
            width:100%;
            margin-right: 0px;
            margin-bottom:22px
        }

        & h3{
            font-size: 30px;
            line-height: 30px;
            max-height: 150px; 
        }
        & p{
            font-size: 16px;
            font-family: ${theme.fonts.Roboto};
            font-weight: 400;
            color: ${theme.colors.text};
            line-height: 25px;
            margin-top: 15px; 
        }
    `}
`