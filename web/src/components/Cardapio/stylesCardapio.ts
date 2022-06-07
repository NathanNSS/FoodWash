import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Categories = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
/* Works on Firefox */
    scrollbar-width: thin;
    scrollbar-color: #E11E20  #EAEAEA;
/* Works on Chrome, Edge, and Safari */
&::-webkit-scrollbar {
    width: 15px;
}
&::-webkit-scrollbar-track {
    background: #EAEAEA;
}
&::-webkit-scrollbar-thumb {
    background-color: rgba(136, 148, 147,0.3);
    border-radius: 15px;
    border: 5px solid #EAEAEA;
}

`
