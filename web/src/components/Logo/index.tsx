import Button from '../Button';
import { SLogo } from './stylesLogo';

interface Props {
    size?: string;
    off?: boolean;
}

export default function Logo({ size, off = false }: Props) {
    return (
        <div>
            <SLogo off={off} size={size}>Food</SLogo>
            <SLogo ativo={true} size={size}>wash</SLogo>
        </div>
    );
}