import QuizzesDao from "./dao.js";

export default function QuizzesRoutes(app) {
    const dao = QuizzesDao();

    const findQuizById = async (req, res) => {
        const { quizId } = req.params;
        const quiz = await dao.findQuizById(quizId);
        res.json(quiz);
    };

    const findQuizzesForCourse = async (req, res) => {
        const { courseId } = req.params;
        const quizzes = await dao.findQuizzesForCourse(courseId);
        res.json(quizzes);
    };

    const createQuizForCourse = async (req, res) => {
        const { courseId } = req.params;
        const quiz = {
            ...req.body,
            course: courseId,
        };
        const newQuiz = await dao.createQuiz(quiz);
        res.send(newQuiz);
    };

    const deleteQuiz = async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.deleteQuiz(quizId);
        res.send(status);
    };

    const updateQuiz = async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await dao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    };

    app.get("/api/quizzes/:quizId", findQuizById);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
    app.post("/api/courses/:courseId/quizzes", createQuizForCourse);
    app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
}
