import { useEffect, useState } from 'react';

import { BannerApp, ButtonHero, ContainerApp, ContainerBlogNews, ContainerChefs, ContainerHero, ContainerHowWorks, ContainerStore, ContentAPP, ContentHero, FigureChef, ImgHero, Num, Step, StepByStep, TextAPP, TextHero, TitleHero } from './stylesHome';

import { InterfaceCardapio } from '../../@types/InterfaceCardapio';
import { api } from '../../connections/api';

import Button from '../../components/Button';
import ContentPresentation from './components/contentPresentation';
import Cardapio from '../../components/Cardapio';
import HowWorks from './components/HowWorks';
import CardNewsBlog from './components/CardNewsBlog';
import { Text, Title } from './components/contentPresentation/stylesContentPresentation';

export default function Home() {
    const [cardapio, setCardapio] = useState<InterfaceCardapio[]>([]);

    const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis corporis 
    veniam cum sint perspiciatis provident a sunt totam. Libero perspiciatis eos ex `

    const lorem2 = `Lorem ipsum dolor sit amet amet consectetur adipisicing elit`
    const news = [
        {
            title: "Todos os cafés e restaurantes da cidade que passaram para o modo de entrega",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore, est nemo aut
            maiores doloremque unde magnam aperiam deleniti enim possimus animi aspernatur perferendis
            neque ipsa!`,
            date: "Mon April 30 2021 17:07:01 GMT-0300",
            image: `${api.defaults.baseURL}files/arrozStrog.png`,
            comments: 15
        },
        {
            title: "Embalagens criativas como uma jogada de marketing bem-sucedida",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore, est nemo aut
            maiores doloremque unde magnam aperiam deleniti enim possimus animi aspernatur perferendis
            neque ipsa!`,
            date: "Mon April 30 2021 17:07:01 GMT-0300",
            image: `${api.defaults.baseURL}files/bifeBatata.png`,
            comments: 15
        },
        {
            title: "Visão geral do serviço de entrega de comida",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore, est nemo aut
            maiores doloremque unde magnam aperiam deleniti enim possimus animi aspernatur perferendis
            neque ipsa!`,
            date: "Mon April 30 2021 17:07:01 GMT-0300",
            image: `${api.defaults.baseURL}files/peixeFrito.png`,
            comments: 15
        },
        {
            title: "Como construir um aplicativo de entrega de comida para o seu negócio",
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolore, est nemo aut
            maiores doloremque unde magnam aperiam deleniti enim possimus animi aspernatur perferendis
            neque ipsa!`,
            date: "Mon April 30 2021 17:07:01 GMT-0300",
            image: `${api.defaults.baseURL}files/bifeBatata.png`,
            comments: 15
        }
    ]

    useEffect(() => {
        async function loadingData() {
            try {
                let data = await api.get<InterfaceCardapio[]>('/cardapio');
                setCardapio(data.data);
            } catch (erro) {
                console.log(erro);
            }
        }
        loadingData()
    }, [])

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
            <Cardapio cardapio={cardapio} />

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
                <HowWorks img={`${api.defaults.baseURL}files/cart.svg`} title='1.Faça seu pedido' text={lorem2} bgColors="#D94360" opacit={0.29} />
                <HowWorks img={`${api.defaults.baseURL}files/credit_card.svg`} title='2.Pague seu Pedido' text={lorem2} bgColors="#4398D1" opacit={0.41} />
                <HowWorks img={`${api.defaults.baseURL}files/order.svg`} title='3.Envio do Pedido' text={lorem2} bgColors="#E67368" opacit={0.59} />
                <HowWorks img={`${api.defaults.baseURL}files/prato.svg`} title='4.Aproveite sua comida' text={lorem2} bgColors="#FF9A1F" opacit={0.70} />
            </ContainerHowWorks>

            <ContentPresentation title="Nossas Últimas Notícias do Blog" text={lorem} />
            <ContainerBlogNews>
                {
                    news.map((item, index) => (
                        <CardNewsBlog key={index} data={item} main={index === 0} />
                    ))
                }
            </ContainerBlogNews>

            <ContainerApp>
                <BannerApp src={`${api.defaults.baseURL}files/bannerApp.svg`} alt="bannerApp"/>
                <ContentAPP>
                    <Title>
                        Obtenha mais recursos com nosso aplicativo móvel
                    </Title>
                    <Text>
                        {lorem+lorem2}
                    </Text>
                    <StepByStep>
                        <Step>
                            <Num>1</Num>
                            <TextAPP>Acompanhe o Status de Entrega</TextAPP>
                        </Step>
                        <Step>
                            <Num>2</Num>
                            <TextAPP>Encomende de qualquer local</TextAPP>
                        </Step>
                        <Step>
                            <Num>3</Num>
                            <TextAPP>Receba avisos importantes</TextAPP>
                        </Step>
                    </StepByStep>
                    <ContainerStore>
                        <img src={`${api.defaults.baseURL}files/googlePlay.png`} alt="googlePlay" />
                        <img src={`${api.defaults.baseURL}files/appStore.png`} alt="appStore" />
                    </ContainerStore>
                </ContentAPP>
            </ContainerApp>
        </>
    )
}

