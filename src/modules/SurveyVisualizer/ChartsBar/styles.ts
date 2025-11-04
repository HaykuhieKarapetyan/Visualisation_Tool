import { Colors } from '@/common/colors';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-right: 16px;

    & .empty-data {
        height: 50vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;
