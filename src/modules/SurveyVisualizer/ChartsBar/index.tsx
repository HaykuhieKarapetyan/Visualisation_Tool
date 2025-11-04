import { type FC, useMemo } from 'react';
import { Container } from './styles';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
} from 'recharts';
import { getCategoryDistribution, getDifficultyDistribution } from './helpers';
import { UseQueryResult } from '@tanstack/react-query';
import { ISurveyQuestionsListItem } from '@/common/types';
import { Colors } from '@/common/colors';

type QuestionsBarChartProps = {
    questionsList: UseQueryResult<ISurveyQuestionsListItem[]>;
};

export const QuestionsBarChart: FC<QuestionsBarChartProps> = ({
    questionsList,
}) => {
    const COLORS = [Colors.Green, Colors.Yellow, Colors.Red];

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
            {questionsList.data?.length ? (
                <>
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
                    <ResponsiveContainer height={300}>
                        <PieChart>
                            <Pie
                                data={difficultyData}
                                dataKey='count'
                                nameKey='name'
                                cx='50%'
                                cy='50%'
                                outerRadius={120}
                                fill='#8884d8'
                                label
                            >
                                {difficultyData.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </>
            ) : (
                <div className='empty-data'>Select another category</div>
            )}
        </Container>
    );
};
