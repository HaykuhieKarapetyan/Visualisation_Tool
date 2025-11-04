import { type FC, useMemo } from 'react';
import { Container } from './styles';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { getCategoryDistribution, getDifficultyDistribution } from './helpers';
import { UseQueryResult } from '@tanstack/react-query';
import { ISurveyQuestionsListItem } from '@/common/types';

type QuestionsBarChartProps = {
    questionsList: UseQueryResult<ISurveyQuestionsListItem[]>;
};

export const QuestionsBarChart: FC<QuestionsBarChartProps> = ({
    questionsList,
}) => {
    const categoryData = useMemo(
        () => getCategoryDistribution(questionsList.data || []),
        [questionsList.data],
    );

    const difficultyData = useMemo(
        () => getDifficultyDistribution(questionsList.data || []),
        [questionsList.data],
    );

    return (
        <Container>
            <h3
                style={{
                    textAlign: 'center',
                    marginBottom: 20,
                }}
            >
                Questions per Category
            </h3>
            <ResponsiveContainer height={250}>
                <BarChart
                    data={categoryData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey='count'
                        fill='#1890ff'
                    />
                </BarChart>
            </ResponsiveContainer>
            <h3
                style={{
                    textAlign: 'center',
                    marginBottom: 20,
                    width: '100%',
                }}
            >
                Questions per Difficulty
            </h3>
            <ResponsiveContainer height={250}>
                <BarChart
                    data={difficultyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey='count'
                        fill='#1890ff'
                    />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
};
