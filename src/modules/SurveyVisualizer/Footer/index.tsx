import { FC } from 'react';
import { FooterContainer } from './styles';

type FooterProps = {
    dataQuantity: number;
};

export const Footer: FC<FooterProps> = ({ dataQuantity }) => {
    return (
        <FooterContainer>
            <div>Total number: {dataQuantity}</div>
        </FooterContainer>
    );
};
