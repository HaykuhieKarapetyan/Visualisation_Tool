import { Table } from 'antd';
import { ISurveyQuestionsListItem } from '@/common/types';
import { columns } from './columns';
import { Container, TableContainer } from './styles';
import { Filters } from '../Filters';
import type { Dispatch, FC, SetStateAction } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { Footer } from '../Footer';
import { TableLoader } from '../TableLoader';

type SurveyQuestionsTableProps = {
    questionsList: UseQueryResult<ISurveyQuestionsListItem[]>;
    setCategory: Dispatch<SetStateAction<number | undefined>>;
    category?: number;
};

export const SurveyQuestionsTable: FC<SurveyQuestionsTableProps> = ({
    questionsList,
    setCategory,
    category,
}) => {
    return (
        <Container>
            <TableContainer>
                <Filters
                    setCategory={setCategory}
                    category={category}
                />
                <TableLoader loading={questionsList.isRefetching} />
                <Table<ISurveyQuestionsListItem>
                    columns={columns}
                    dataSource={questionsList.data}
                    rowKey={'question'}
                    sticky={true}
                    pagination={false}
                    scroll={{ x: 900, y: 450 }}
                    bordered
                />
                <Footer dataQuantity={questionsList.data?.length || 0} />
            </TableContainer>
        </Container>
    );
};
