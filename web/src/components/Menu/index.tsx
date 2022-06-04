import { Container, Header, ItemLista, Link, Lista, Nav } from "./stylesMenu";

import Button from "../Button";
import Logo from "../Logo";

export default function Menu() {
    return (
        <Header>
            <Container> 
                <Logo/>
                <Nav>
                    <Lista>
                        <ItemLista><Link on href="">Home</Link></ItemLista>
                        <ItemLista><Link href="">Menu</Link></ItemLista>
                        <ItemLista><Link href="">Service</Link></ItemLista>
                        <ItemLista><Link href="">Aboutus</Link> </ItemLista>
                    </Lista>
                    <Button name="Log in" outLine></Button>
                </Nav>
            </Container>
        </Header>
    )
}