import { ICategoryItem, ISurveyQuestionsListItem } from '@/common/types';
import axios from 'axios';

export const SurveyVisualizerService = {
    async getQuestionsList(
        category?: number,
    ): Promise<ISurveyQuestionsListItem[]> {
        const {
            data: { results },
        } = await axios.get(`https://opentdb.com/api.php`, {
            params: {
                amount: 50,
                category,
            },
        });
        return results;
    },

    async getCategoryOptions(): Promise<{
        trivia_categories: ICategoryItem[];
    }> {
        const { data } = await axios.get(
            `https://opentdb.com/api_category.php`,
        );

        return data;
    },
};
