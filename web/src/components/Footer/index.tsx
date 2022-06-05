import { Container, ContainerText, ContentLinks, ContentLinksI, Copyright, InputNL, Item, LabelNL, NewsLetter, Rodape, SocialMedia, TitleContent } from './stylesFooter';

import Button from '../Button';
import Logo from '../Logo';
import IconFooter from './components/IconFooter';

import {RiFacebookFill, RiInstagramFill, RiTwitterFill} from 'react-icons/ri'
import {FiPhone} from 'react-icons/fi'
import {GoMail} from 'react-icons/go'
import {VscGlobe} from 'react-icons/vsc'
import {IoLocationOutline} from 'react-icons/io5'

export default function Footer() {
    return (
        <Rodape>
            <Container>
                <NewsLetter>
                    <LabelNL>
                        Assinar a Newsletter
                    </LabelNL>
                    <InputNL placeholder='Digite seu endereço de e-mail' />
                    <Button name="Enviar" />
                </NewsLetter>

                <TitleContent>
                    <Logo off={true} />
                </TitleContent>
                <TitleContent>
                    Links Rápidos
                </TitleContent>
                <TitleContent>
                    Nosso serviço
                </TitleContent>
                <TitleContent>
                    Contate-Nos
                </TitleContent>

                <ContainerText>
                    Amet minim mollit non deserunt ullamco
                    est sit aliqua dolor do amet

                    <SocialMedia>
                        <IconFooter>
                            <RiFacebookFill/>
                        </IconFooter>
                        <IconFooter>
                            <RiInstagramFill/>
                        </IconFooter>
                        <IconFooter>
                            <RiTwitterFill/>
                        </IconFooter>
                    </SocialMedia>

                </ContainerText>

                <ul>
                    <Item>
                        <ContentLinks to="/">
                            Sobre Nós
                        </ContentLinks>
                    </Item>

                    <Item>
                        <ContentLinks to="/">
                            Mais Pesquisa
                        </ContentLinks>
                    </Item>
                    <Item>
                        <ContentLinks to="/">
                            Pedido Online
                        </ContentLinks>
                    </Item>
                    
                    <Item>
                        <ContentLinks to="/">
                            Suporte
                        </ContentLinks>
                    </Item>
                </ul>

                <ul>
                    <Item>
                        <ContentLinks to="/">
                            Launch
                        </ContentLinks>
                    </Item>

                    <Item>
                        <ContentLinks to="/">
                            Jantar
                        </ContentLinks>
                    </Item>
                    <Item>
                        <ContentLinks to="/">
                            Refeições
                        </ContentLinks>
                    </Item>
                    
                    <Item>
                        <ContentLinks to="/">
                            Privacidade
                        </ContentLinks>
                    </Item>
                </ul>

                <ul>
                    <Item>
                        <ContentLinksI to="/">
                            <FiPhone size={23}/> (225) 555-0118
                        </ContentLinksI>
                    </Item>

                    <Item>
                        <ContentLinksI to="/">
                            <GoMail size={25}/> alma.lawson@example.com
                        </ContentLinksI>
                    </Item>
                    <Item>
                        <ContentLinksI to="/">
                            <VscGlobe size={23}/> http://www.foodwash.com
                        </ContentLinksI>
                    </Item>
                    
                    <Item>
                        <ContentLinksI to="/">
                            <IoLocationOutline size={40}/> Binford Ltd, 88 Brooklyn Golden Street, New york, USA
                        </ContentLinksI>
                    </Item>
                </ul>

                


            </Container>
            <Copyright>
                All Copyright reserve by <Logo off={true} size="20px"/> 
            </Copyright>
        </Rodape>
    );
}