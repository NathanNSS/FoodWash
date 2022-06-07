
import { Container, Text, Title } from './stylesContentPresentation';

interface Props {
    title: string;
    text: string;
}

export default function ContentPresentation({ title, text }: Props) {
    return (
        <Container>
            <Title>
                {title}        
            </Title>
            <Text>
                {text}
            </Text>
        </Container>

    )
}

