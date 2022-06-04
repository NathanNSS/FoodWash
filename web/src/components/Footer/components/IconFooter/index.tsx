import { ReactNode } from 'react';
import { Container} from './stylesIconFooter';

interface Props{
    children?: ReactNode;
    link?:string;
}

export default function IconFooter({children, link}: Props) {
    return (
        <Container onClick={()=>{}}>
            {children}
        </Container>
    );
}