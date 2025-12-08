import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        description: String,
        points: Number,
        due: Date,
        available: Date,
        until: Date,
        course: { type: String, ref: "CourseModel" },
        published: Boolean,
        type: {
            type: String,
            enum: [
                "GRADED_QUIZ",
                "PRACTICE_QUIZ",
                "GRADED_SURVEY",
                "UNGRADED_SURVEY",
            ],
            default: "GRADED_QUIZ",
        },
        group: {
            type: String,
            enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
            default: "QUIZZES",
        },
        shuffleAnswers: {
            type: Boolean,
            default: true,
        },
        timeLimit: {
            type: Number,
            default: 20,
        },
        multipleAttempts: {
            type: Boolean,
            default: false,
        },
        attemptsAllowed: {
            type: Number,
            default: 1,
        },
        showCorrectAnswers: {
            type: Boolean,
            default: false,
        },
        showCorrectAnswersDate: Date,
        accessCode: {
            type: String,
            default: "",
        },
        oneQuestionAtATime: {
            type: Boolean,
            default: true,
        },
        webcamRequired: {
            type: Boolean,
            default: false,
        },
        lockQuestionsAfterAnswering: {
            type: Boolean,
            default: false,
        },
        questions: [
            {
                _id: String,
                type: {
                    type: String,
                    enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "FILL_IN_THE_BLANK"],
                    default: "MULTIPLE_CHOICE",
                },
                title: String,
                points: {
                    type: Number,
                    default: 1,
                },
                question: String,
                multipleChoiceOptions: [String],
                correctMultipleChoice: String,
                correctTrueFalse: Boolean,
                correctFillInTheBlank: [String],
            },
        ],
    },
    { collection: "quizzes" },
);

export default quizSchema;
