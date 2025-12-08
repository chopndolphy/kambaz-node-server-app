import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function QuizzesDao() {
    function findQuizById(quizId) {
        return model.findById(quizId);
    }

    function findQuizzesForCourse(courseId) {
        return model.find({ course: courseId });
    }

    function createQuiz(quiz) {
        const newQuiz = { ...quiz, _id: uuidv4() };
        return model.create(newQuiz);
    }

    function deleteQuiz(quizId) {
        return model.deleteOne({ _id: quizId });
    }

    function updateQuiz(quizId, quizUpdates) {
        return model.updateOne({ _id: quizId }, { $set: quizUpdates });
    }

    return {
        findQuizById,
        findQuizzesForCourse,
        createQuiz,
        deleteQuiz,
        updateQuiz,
    };
}
