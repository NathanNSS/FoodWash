import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Categories = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
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
export const Menu = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    column-gap: 24px;
    row-gap: 40px;
    margin-top: 53px;
    min-height: 1050px;
`
