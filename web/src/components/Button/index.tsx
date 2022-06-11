import { Container } from "./stylesButton";

interface Props {
    name: string;
    outLine?: boolean;
    buttonCart?: boolean;
}

export default function Button({ name, outLine, buttonCart }: Props) {
    return (
        <Container outLine={outLine} buttonCart={buttonCart}>
            {name}
        </Container>
    )
}