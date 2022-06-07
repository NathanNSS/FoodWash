
import { Categories, Container } from './stylesCardapio';
import {InterfaceCardapio} from '../../@types/InterfaceCardapio';
import Category from './Category';

interface Props   {
    cardapio?: InterfaceCardapio[];
}

export default function Cardapio({ cardapio }: Props) {
    return (
        <Container>
            <Categories>
                {cardapio?.map(item => (
                    <Category key={item.category.id} name={item.category.name}></Category>
                ))}
            </Categories>
            <div>
                {JSON.stringify(cardapio)}
            </div>
        </Container>

    )
}

