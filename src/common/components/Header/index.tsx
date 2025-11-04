import type { FC } from 'react';
import { HeaderContainer } from './styles';

type HeaderProps = {
    headerText: string;
};

export const Header: FC<HeaderProps> = ({ headerText }) => {
    return <HeaderContainer>{headerText}</HeaderContainer>;
};
