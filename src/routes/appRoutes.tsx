import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from "../pages/ResetPassword";
import Error from "../pages/Error";
import Admin from "../pages/Admin";
import RsbApplication from "../components/rsbApplication";
import StudentDashboardPage from "../pages/Dashboard";
import Attachment from "../components/forms/attachement";
import Citizenship from "../components/forms/citizenship";
import Course from "../components/forms/course";
import EmergencyContact from "../components/forms/emergencyContact";
import PersonalInfo from "../components/forms/personalInfo";
import ProgramFinancing from "../components/forms/programFinacing";
import Qualifications from "../components/forms/qaulifications";
import RsubsQualification from "../components/forms/rsubsQualification";
import WorkExperience from "../components/forms/workExp";


function AppRouter() {

    return (

        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset_password" element={<ResetPassword />} />
                    <Route path="/application" element={< RsbApplication />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/student" element={<StudentDashboardPage />} />
                    <Route path="/admin" element={<Admin />} />


                    <Route path="/workExp" element={<WorkExperience />} />
                    <Route path="/rsubsqualification" element={<RsubsQualification />} />
                    <Route path="/qualifications" element={<Qualifications />} />

                    <Route path="/programfinacing" element={<ProgramFinancing />} />
                    <Route path="/personalinfo" element={<PersonalInfo />} />
                    <Route path="/emergency" element={<EmergencyContact />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/citizenship" element={<Citizenship />} />
                    <Route path="/attachment" element={<Attachment/>} />
                </Routes>
            </Router>

        </div>

    )

};

export default AppRouter;