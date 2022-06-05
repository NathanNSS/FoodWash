import { Container, Header, ItemLista, Links, Lista, Nav } from "./stylesMenu";

import Button from "../Button";
import Logo from "../Logo";

export default function Menu() {
    return (
        <Header>
            <Container> 
                <Logo/>
                <Nav>
                    <Lista>
                        <ItemLista><Links $ativo={true} to="/">Home</Links></ItemLista>
                        <ItemLista><Links to="/">Menu</Links></ItemLista>
                        <ItemLista><Links to="/">Service</Links></ItemLista>
                        <ItemLista><Links to="/">Aboutus</Links> </ItemLista>
                    </Lista>
                    <Button name="Log in" outLine></Button>
                </Nav>
            </Container>
        </Header>
    )
}