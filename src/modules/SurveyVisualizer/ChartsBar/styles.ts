import { Colors } from '@/common/colors';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-right: 16px;

    & .charts-container {
        height: 80vh;
        background-color: ${Colors.PrimaryNeutral[2]};
        border: 1px solid ${Colors.PrimaryNeutral[5]};
        border-radius: 6px;
    }
`;
