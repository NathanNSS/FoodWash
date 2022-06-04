import { ReactNode } from "react";
import { Container } from "./stylesButton";

interface Props {
    name:string;
    outLine?: boolean;
}

export default function Button({name, outLine}: Props) {
    return (
        <Container outLine={outLine}>
            {name}
        </Container>
    )
}