import { Container, } from './stylesStarRating';

import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import { useEffect, useState } from 'react';

interface Props {
    rating: number;
}

export default function StarRating({ rating }: Props) {
    const [stars, setStars] = useState<JSX.Element[]>([])
   
    //setstars(star)
    
    useEffect(() => {
        function createStar(){
            const star =  [] as JSX.Element[]
            for (let i = 1; i <= rating; i++) {
                star.unshift(<IoIosStar key={i} color='#E11E20' size={24} />)
            }
            for (let k = 1; k <= 5-rating; k++) {
                
                star.push(<IoIosStarOutline key={k+10} color='#E11E20' size={24} />)
            }
            setStars(star)

        }
        createStar();

    },[rating])
    return (
        <Container>
            {stars}
        </Container>
    )
}