export enum EQuestionType {
    boolean = 'True / False',
    multiple = 'Multiple Choice',
}

export enum EQuestionDifficulty {
    easy = 'Easy',
    medium = 'Medium',
    hard = 'Hard',
}

export enum EQuestionsColumnKey {
    type = 'type',
    difficulty = 'difficulty',
    category = 'category',
    question = 'question',
    correctAnswer = 'correct_answer',
    inCorrectAnswer = 'InCorrectAnswer',
}
