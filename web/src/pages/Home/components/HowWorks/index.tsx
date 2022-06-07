import { BgImg, BgIMG, Container, ContainerIMG, Text, Title } from './stylesHowWorks';

interface Props extends BgIMG {
    img: string;
    title: string;
    text: string;
}

export default function HowWorks({ img, bgColors, opacit, title, text }: Props) {

    return (
        <Container>
            <ContainerIMG >
                <BgImg bgColors={bgColors} opacit={opacit}/>
                <img src={img} alt={title} />
            </ContainerIMG>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Container>
    )
}

