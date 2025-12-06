import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
import EnrollmentsDao from "../Enrollments/dao.js";

export default function UsersDao() {
    const enrollmentsDao = EnrollmentsDao(); // Add this

    const createUser = (user) => {
        const newUser = { ...user, _id: uuidv4() };
        return model.create(newUser);
    };
    const findAllUsers = () => model.find();
    const findUserById = (userId) => model.findById(userId);
    const findUserByUsername = (username) =>
        model.findOne({ username: username });
    const findUserByCredentials = (username, password) =>
        model.findOne({ username, password });
    const findUsersByRole = (role) => model.find({ role: role });
    const updateUser = (userId, user) =>
        model.updateOne({ _id: userId }, { $set: user });
    const deleteUser = async (userId) => {
        await enrollmentsDao.unenrollAllCoursesForUser(userId);
        const result = await model.deleteOne({ _id: userId });
        return result;
    };
    const findUsersByPartialName = (partialName) => {
        const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
        return model.find({
            $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
        });
    };

    return {
        createUser,
        findAllUsers,
        findUserById,
        findUserByUsername,
        findUserByCredentials,
        findUsersByRole,
        findUsersByPartialName,
        updateUser,
        deleteUser,
    };
}
