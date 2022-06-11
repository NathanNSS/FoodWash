
import { Categories, Container, Menu } from './stylesCardapio';
import { InterfaceCardapio, InterfaceCategory } from '../../@types/InterfaceCardapio';
import Category from './Category';
import { useEffect, useState } from 'react';
import CardCardapio from './CardCardapio';

interface Props {
    cardapio: InterfaceCardapio[] ;
}

const AllItem = {
    "id": 0,
    "name": "Todos os Pratos",
    "image": "all.svg",
}

export default function Cardapio({ cardapio }: Props) {
    const [categories, setCategories] = useState<InterfaceCategory[]>([AllItem])
    const [selectedCategory, setSelectedCategory] = useState<number | null>(0)

    const [lista, setLista] = useState<InterfaceCardapio[]>([])


    useEffect(() => {
        function buscaCategory() {
            let cate = [] as InterfaceCategory[]
            cardapio?.forEach(element => {
                cate.findIndex(item => element.category.id === item.id) && cate.push(element.category)
            });
            //cate.unshift(AllItem)
            setCategories(oldValue => [...oldValue, ...cate])
            cate = []
        }
        buscaCategory()
    }, [cardapio])

    useEffect(()=>{
        function testaFiltro(id: number | null) {
			if (selectedCategory !== null && selectedCategory !== 0) return selectedCategory === id;
			return true;
		}
        
        const novaLista = cardapio?.filter(
			(item) => testaFiltro(item.category.id)
		);
        
        setLista(novaLista);
    },[cardapio, selectedCategory])
    
    return (
        <Container>
            <Categories>
                {categories?.map((item, index) => (
                    <Category key={index} categories={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></Category>
                ))}
            </Categories>
            <Menu>
                {/* {JSON.stringify(lista)} */}
                {lista?.map(item => (
                    <CardCardapio data={item}/>
                ))}
            </Menu>
        </Container>

    )
}

