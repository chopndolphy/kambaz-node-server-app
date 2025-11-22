import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
    function enrollUserInCourse(userId, courseId) {
        const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
        db.enrollments.push(newEnrollment);
        return newEnrollment;
    }
    function removeEnrollment(enrollmentId) {
        db.enrollments = db.enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
    }
    function findEnrollmentsForUser(userId) {
        return db.enrollments.filter((enrollment) => enrollment.user === userId);
    }
    return { enrollUserInCourse, removeEnrollment, findEnrollmentsForUser };
}

