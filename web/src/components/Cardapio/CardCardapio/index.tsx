import { InterfaceCardapio } from '../../../@types/InterfaceCardapio';
import { api } from '../../../connections/api';
import Button from '../../Button';
import StarRating from '../StarRating';
import { Container, Content, Title, Text, Price, ContainerRating } from './stylesCardCardapio';

interface Props {
    data: InterfaceCardapio;
}

export default function CardCardapio({data}: Props) {
    return (
        <Container>
            <img src={`${api.defaults.baseURL}files/${data.image}`} alt={data.name} />
            <Content>
                <Title>
                    {data.name}
                </Title>
                <Text>
                    {data.description}
                </Text>
                <Price>
                    R$ {data.price}        
                </Price>
                <ContainerRating>
                    <StarRating rating={data.rating}/>
                    <Button name='Carrinho'  outLine buttonCart/>
                </ContainerRating>
            </Content>
        </Container>
    )
}