import { Skeleton } from 'antd';
import styled from 'styled-components';

export const WrapperSkeletonLinearLoading = styled(Skeleton.Input)`
    &&& {
        height: 2px;
        width: 100%;
        line-height: 0;
        font-size: 0;
        display: block;
        border-radius: 0;
    }

    &&& .ant-skeleton-input,
    .ant-skeleton-input::after {
        background: linear-gradient(
            90deg,
            rgba(24, 144, 255, 0.2) 25%,
            rgba(24, 144, 255, 0.4) 37%,
            rgba(24, 144, 255, 0.2) 63%
        );
    }
`;

export const TableLoaderWrapper = styled.div`
    min-height: 2px;
    height: 2px;
`;
