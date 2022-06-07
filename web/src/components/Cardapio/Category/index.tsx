
import { Container } from './stylesCategories';

interface Props {
    name: string;
}

export default function Category({ name }: Props) {
    return (
        <Container ativo={name === "combo de pratos" && true} >
            {name}
        </Container>

    )
}

