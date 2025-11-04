import type { FC } from 'react';

import { TableLoaderWrapper, WrapperSkeletonLinearLoading } from './styles';

type TableLoaderProps = {
    loading: boolean;
};

export const TableLoader: FC<TableLoaderProps> = ({ loading }) => (
    <>
        {loading ? (
            <WrapperSkeletonLinearLoading active={true} />
        ) : (
            <TableLoaderWrapper />
        )}
    </>
);
