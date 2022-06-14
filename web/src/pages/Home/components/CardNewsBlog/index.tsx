import { InterfaceBlogNews } from '../../../../@types/InterfaceBlogNews';

import { Container } from './stylesCardNewsBlog';
import {FcCalendar,FcSms} from 'react-icons/fc'
interface Props {
    data: InterfaceBlogNews;
    main?: boolean;
}

export default function CardNewsBlog({ data, main }: Props) {
    let date  = data.date.split(' ')
    return (
        <Container main={main}>
            <img src={data.image} alt={data.image.split('.')[0]} />
            <h3>{data.title}</h3>
            {main && <p>{data.text}</p>}
            <span />
            <div>
                <div><FcCalendar size={16}/>{`${date[1]} ${date[2]}, ${date[3]}`}</div>
                <div><FcSms size={16}/> {data.comments} Comentários</div>
            </div>
        </Container>
    )
}

