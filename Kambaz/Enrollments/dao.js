import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export default function EnrollmentsDao() {
    async function findCoursesForUser(userId) {
        const enrollments = await model.find({ user: userId }).populate("course");
        return enrollments.map((enrollment) => enrollment.course);
    }
    async function findUsersForCourse(courseId) {
        const enrollments = await model.find({ course: courseId }).populate("user");
        const users = enrollments
            .map((enrollment) => enrollment.user)
            .filter((user) => user !== null);

        return users;
    }

    async function enrollUserInCourse(userId, courseId) {
        return model.create({
            user: userId,
            course: courseId,
            _id: `${userId}-${courseId}`,
        });
    }
    function unenrollUserFromCourse(user, course) {
        return model.deleteOne({ user, course });
    }
    function unenrollAllUsersFromCourse(courseId) {
        return model.deleteMany({ course: courseId });
    }
    function unenrollAllCoursesForUser(userId) {
        return model.deleteMany({ user: userId });
    }
    return {
        findCoursesForUser,
        findUsersForCourse,
        enrollUserInCourse,
        unenrollUserFromCourse,
        unenrollAllUsersFromCourse,
        unenrollAllCoursesForUser,
    };
}
