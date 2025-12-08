import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        _id: String,
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: String,
        email: String,
        lastName: String,
        dob: Date,
        role: {
            type: String,
            enum: ["STUDENT", "FACULTY", "ADMIN", "TA"],
        },
        loginId: String,
        section: String,
        lastActivity: Date,
        totalActivity: String,
        quizzesTaken: [
            {
                _id: String,
                attemptsUsed: Number,
                score: Number,
                answers: [
                    {
                        _id: String, // id of question
                        answer: String,
                        answerTrueFalse: Boolean,
                    },
                ],
            },
        ],
    },
    { collection: "users" },
);
export default userSchema;
