import { EQuestionsColumnKey } from '@/common/enums';
import type { ISurveyQuestionsListItem } from '@/common/types';
import type { ColumnsType } from 'antd/es/table';

export const columns: ColumnsType<ISurveyQuestionsListItem> = [
    {
        key: EQuestionsColumnKey.type,
        dataIndex: EQuestionsColumnKey.type,
        title: 'Type',
    },
    {
        key: EQuestionsColumnKey.difficulty,
        dataIndex: EQuestionsColumnKey.difficulty,
        title: 'Difficulty',
    },
    {
        key: EQuestionsColumnKey.category,
        dataIndex: EQuestionsColumnKey.category,
        title: 'Category',
    },
    {
        key: EQuestionsColumnKey.question,
        dataIndex: EQuestionsColumnKey.question,
        title: 'Question',
        width: '250px',
    },
    {
        key: EQuestionsColumnKey.correctAnswer,
        dataIndex: EQuestionsColumnKey.correctAnswer,
        title: 'Correct Answer',
    },
];
