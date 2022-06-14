import { Container, Header, ItemLista, Links, Lista, Nav } from "./stylesMenu";

import Button from "../Button";
import Logo from "../Logo";
import { MouseEvent } from "react";

export default function Menu() {
    function clickAncor(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, name: string){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
       let tag = document.querySelector(`[id="${name}"]`)
       if( tag !== null) tag.scrollIntoView();
    }
    return (
        <Header>
            <Container> 
                <Logo/>
                <Nav>
                    <Lista>
                        <ItemLista><Links onClick={e => clickAncor(e, 'Home')} $ativo={true} to="/">Home</Links></ItemLista>
                        <ItemLista><Links onClick={e => clickAncor(e, 'Menu')} to="/">Menu</Links></ItemLista>
                        <ItemLista><Links onClick={e => clickAncor(e, 'Service')} to="/">Service</Links></ItemLista>
                        <ItemLista><Links onClick={e => clickAncor(e, 'About')} to="/">Aboutus</Links> </ItemLista>
                    </Lista>
                    <Button name="Log in" outLine></Button>
                </Nav>
            </Container>
        </Header>
    )
}