import { EQuestionType, EQuestionDifficulty } from 'common/enums';

export interface ISurveyQuestionsListItem {
    type: EQuestionType;
    difficulty: EQuestionDifficulty;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface ICategoryItem {
    id: number;
    name: string;
}
