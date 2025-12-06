//import EnrollmentsDao from "./dao.js";
//export default function EnrollmentsRoutes(app, db) {
//const dao = EnrollmentsDao(db);
//const enrollUserInCourse = (req, res) => {
//const { courseId } = req.params;
//const currentUser = req.session["currentUser"];
//if (!currentUser) {
//res.sendStatus(401);
//return;
//}
//const enrollment = dao.enrollUserInCourse(currentUser._id, courseId);
//res.json(enrollment);
//};
//const removeEnrollment = (req, res) => {
//const { enrollmentId } = req.params;
//dao.removeEnrollment(enrollmentId);
//res.sendStatus(200);
//};
//const findEnrollmentsForCurrentUser = (req, res) => {
//const currentUser = req.session["currentUser"];
//if (!currentUser) {
//res.sendStatus(401);
//return;
//}
//const enrollments = dao.findEnrollmentsForUser(currentUser._id);
//res.json(enrollments);
//};
//app.get("/api/users/current/enrollments", findEnrollmentsForCurrentUser);
//app.delete("/api/enrollments/:enrollmentId", removeEnrollment);
//app.post("/api/users/current/courses/:courseId", enrollUserInCourse);
//}
