import { useEffect, useState } from 'react';

import { ButtonHero, ContainerChefs, ContainerHero, ContainerHowWorks, ContentHero, FigureChef, ImgHero, TextHero, TitleHero } from './stylesHome';

import { InterfaceCardapio } from '../../@types/InterfaceCardapio';
import { api } from '../../connections/api';

import Button from '../../components/Button';
import ContentPresentation from './components/contentPresentation';
import Cardapio from '../../components/Cardapio';
import HowWorks from './components/HowWorks';

export default function Home() {
    const [cardapio, setCardapio] = useState<InterfaceCardapio[]>([]);

    const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis 
    veniam cum sint perspiciatis provident a sunt totam. Libero perspiciatis eos ex `
    
    const lorem2 = `Lorem ipsum dolor sit amet amet consectetur adipisicing elit`

    useEffect(()=>{
        async function loadingData(){
            try{
                let data = await api.get<InterfaceCardapio[]>('/cardapio');
                setCardapio(data.data);
            }catch(erro){
                console.log(erro);
            }
        }
        loadingData()
    },[])
    return (
        <>
            <ContainerHero>
                <ContentHero>
                    <TitleHero>
                        <b>Alimentação Instantânea</b>, Para a Fome Instantânea
                    </TitleHero>
                    <TextHero>
                        {lorem}
                    </TextHero>
                    <ButtonHero>
                        <Button name='Iniciar' />
                        <Button name="Explorar Menu" outLine />
                    </ButtonHero>
                </ContentHero>
                <ImgHero>
                    <img src={`${api.defaults.baseURL}files/heroImg.png`} alt="assa" />
                </ImgHero>
            </ContainerHero>

            <ContentPresentation title='Cardápio Especial Para Você' text={lorem} />
            <Cardapio cardapio={cardapio}/>

            <ContentPresentation title='Nossos Chefs Especiais' text={lorem} />
            <ContainerChefs>
                <FigureChef>
                    <img src={`${api.defaults.baseURL}files/chef1.png`} alt="Chef John Plavor" />
                    <div>
                        <figcaption>John Plavor</figcaption>
                        <figcaption>Assistan, Chef</figcaption>
                    </div>
                </FigureChef>

                <FigureChef>
                    <img src={`${api.defaults.baseURL}files/chef2.png`} alt="Chef Mark Osian" />
                    <div>
                        <figcaption>Mark Osian</figcaption>
                        <figcaption>Assistan, Chef</figcaption>
                    </div>
                </FigureChef>

                <FigureChef>
                    <img src={`${api.defaults.baseURL}files/chef3.png`} alt="Chef Blover Oliber" />
                    <div>
                        <figcaption>Blover Oliber</figcaption>
                        <figcaption>Assistan, Chef</figcaption>
                    </div>
                </FigureChef>
            </ContainerChefs>

            <ContentPresentation title='Como Funciona' text={lorem} />
            <ContainerHowWorks>
                <HowWorks img={`${api.defaults.baseURL}files/cart.svg`} title='1.Faça seu pedido' text={lorem2} bgColors="#D94360" opacit={0.29}/>
                <HowWorks img={`${api.defaults.baseURL}files/credit_card.svg`} title='2.Pague seu Pedido' text={lorem2}  bgColors="#4398D1" opacit={0.41}/>
                <HowWorks img={`${api.defaults.baseURL}files/order.svg`} title='3.Envio do Pedido' text={lorem2} bgColors="#E67368" opacit={0.59}/>
                <HowWorks img={`${api.defaults.baseURL}files/prato.svg`} title='4.Aproveite sua comida' text={lorem2} bgColors="#FF9A1F" opacit={0.70}/>
            </ContainerHowWorks>
        </>
    )
}

