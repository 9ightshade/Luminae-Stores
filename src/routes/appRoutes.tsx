import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from "../pages/ResetPassword";
import Error from "../pages/Error";
import Admin from "../pages/Admin";
import RsbApplication from "../components/rsbApplication";
import StudentDashboardPage from "../pages/Dashboard";
import Attachment from "../components/forms/attachment";
import Citizenship from "../components/forms/citizenship";
import Course from "../components/forms/course";
import EmergencyContact from "../components/forms/emergencyContact";
import PersonalInfo from "../components/forms/personalInfo";
import ProgramFinancing from "../components/forms/programFinancing";
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


                    <Route path="/workExp" element={<WorkExperience data={undefined} onChange={undefined} />} />
                    <Route path="/rsubsqualification" element={<RsubsQualification data={undefined} onChange={undefined} />} />
                    <Route path="/qualifications" element={<Qualifications data={undefined} onChange={undefined} />} />

                    <Route path="/programfinacing" element={<ProgramFinancing data={undefined} onChange={undefined} />} />
                    <Route path="/personalinfo" element={<PersonalInfo data={undefined} onChange={undefined} />} />
                    <Route path="/emergency" element={<EmergencyContact data={undefined} onChange={undefined} />} />
                    <Route path="/course" element={<Course data={undefined} onChange={undefined} />} />
                    <Route path="/citizenship" element={<Citizenship data={undefined} onChange={undefined} />} />
                    <Route path="/attachment" element={<Attachment data={undefined} onChange={undefined}/>} />
                </Routes>
            </Router>

        </div>

    )

};

export default AppRouter;