import { ISurveyQuestionsListItem } from '@/common/types';

type ChartDataItem = { name: string; count: number };

export function getCategoryDistribution(
    questions: ISurveyQuestionsListItem[],
): ChartDataItem[] {
    const counts: Record<string, number> = {};
    questions.forEach(q => {
        counts[q.category] = (counts[q.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

export function getDifficultyDistribution(
    questions: ISurveyQuestionsListItem[],
): ChartDataItem[] {
    const counts: Record<string, number> = {};
    questions.forEach(q => {
        counts[q.difficulty] = (counts[q.difficulty] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
}
