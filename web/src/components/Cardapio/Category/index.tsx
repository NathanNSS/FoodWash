
import { InterfaceCategory } from '../../../@types/InterfaceCardapio';
import { api } from '../../../connections/api';
import { Container, ContainerIMG } from './stylesCategories';

interface Props {
    categories: InterfaceCategory;
    setSelectedCategory: React.Dispatch<React.SetStateAction<number | null>>;
    selectedCategory: number | null
}

export default function Category({ categories, setSelectedCategory, selectedCategory }: Props) {
    function SelectedCategory(id:number){
        id !== selectedCategory ? setSelectedCategory(id) : setSelectedCategory(0)
    }
    return (
        <Container ativo={categories.id === selectedCategory} onClick={() => SelectedCategory(categories.id)} >
            <ContainerIMG ativo={categories.id === selectedCategory}>
                <img src={`${api.defaults.baseURL}files/${categories.image}`} alt={categories.name} />
            </ContainerIMG>
            <span>
                {categories.name}
            </span>
        </Container>

    )
}

