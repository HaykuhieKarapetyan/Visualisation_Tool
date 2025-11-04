import { useState } from 'react';
import { QuestionsBarChart } from './ChartsBar';
import { SurveyVisualizerContainer, SpinContainer } from './styles';
import { SurveyQuestionsTable } from './Table';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { EQueryNames } from '@/constants';
import { SurveyVisualizerService } from '@/api/surveyVisualizer.service';
import { Header } from '@/common/components/Header';
import { Spin } from 'antd';

export const SurveyVisualizer = () => {
    const [category, setCategory] = useState<number>();

    const questionsList = useQuery({
        queryKey: [EQueryNames.questionList, category],
        queryFn: () => SurveyVisualizerService.getQuestionsList(category),
        placeholderData: keepPreviousData,
    });

    return (
        <SurveyVisualizerContainer>
            <Header headerText='Trivia Questions Visualizer' />
            {!questionsList.data && questionsList.isPending ? (
                <SpinContainer>
                    <Spin
                        tip='Loading'
                        size='large'
                    />
                </SpinContainer>
            ) : (
                <div className='mainPage'>
                        <QuestionsBarChart questionsList={questionsList} />
                    <SurveyQuestionsTable
                        questionsList={questionsList}
                        category={category}
                        setCategory={setCategory}
                    />
                </div>
            )}
        </SurveyVisualizerContainer>
    );
};
