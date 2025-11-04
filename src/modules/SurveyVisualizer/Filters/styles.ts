import { Colors } from '@/common/colors';
import { Row, Col } from 'antd';
import styled from 'styled-components';

export const FiltersContainer = styled(Row)`
    width: 100%;
    height: 60px;
`;

export const SelectContainer = styled(Col)`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: end;
`;

export const CustomSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
    margin-bottom: 1rem;
    position: relative;

    & label {
        color: ${Colors.PrimaryNeutral[400]};
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        width: fit-content;

        & > div {
            display: flex;
            gap: 5px;
            align-items: center;
            & svg {
                color: ${Colors.PrimaryNeutral[70]};
                cursor: pointer;
            }
        }
    }

    & .select-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 20px;
    }

    && .ant-select-selector {
        height: 2rem;
        display: flex;
        align-items: center;
        & .ant-select-selection-search {
            display: flex;
            align-items: center;
            & input {
                height: 100%;
            }
        }
    }

    && .ant-select-selection-placeholder::after,
    && .ant-select-multiple .ant-select-selector:after {
        line-height: 0.875rem;
    }

    & .ant-select-selection-overflow::after {
        line-height: 1.25rem;
    }
`;
