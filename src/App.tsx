import React from "react";
import { Routes, Route } from "react-router-dom";
import Classes from "./pages/Courses/Classess/Classes";
import ClassDetails from "./pages/Courses/Classess/ClassesDetails";
import Courses from "./pages/Courses/Courses/Courses";
import Curriculum from "./pages/Courses/Curriculum/Curriculum";
import Events from "./pages/Courses/Event/Event";
import EventDetails from "./pages/Courses/Event/EventDetails";
import Levels from "./pages/Courses/Levels/Levels";
import Subject from "./pages/Courses/Subject/Subject";
import Error404 from "./pages/Error404/Error404";
import Navigation from "./pages/Navigation/Navigation";
import AddBranch from "./pages/Setup/Branch/AddBranch";
import Branch from "./pages/Setup/Branch/Branch";
import Business from "./pages/Setup/Business/Business";
import BusinessSetup from "./pages/Setup/Business/BusinessSetup";
import Invoice from "./pages/Admission/Invoice/Invoice";
import Admission from "./pages/Admission/Admission/Admission";
import Student from "./pages/Students/Student/Student";
import AddStudent from "./pages/Students/Student/AddStudent";
import StudentDetails from "./pages/Students/Student/StudentDetails";
import Batch from "./pages/Students/Batch/Batch";
import Receipt from "./pages/Admission/Receipt/Receipt";
import AddBatch from "./pages/Students/Batch/AddBatch";
import Team from "./pages/Team/Team/Team";
import AddTeamMember from "./pages/Team/Team/AddTeamMember";
import TeamDetails from "./pages/Team/Team/TeamDetails";
import BranchAndLocation from "./pages/KlassbookSetup/BranchAndLocation/BranchAndLocation";
import BranchAndLocationDetails from "./pages/KlassbookSetup/BranchAndLocation/BranchAndLocationDetails";
import ProgramAndCourses from "./pages/KlassbookSetup/ProgramAndCourses/ProgramAndCourses";
import Gallery from "./pages/KlassbookSetup/Gallery/Gallery";
import BusinessInformation from "./pages/KlassbookSetup/BusinessInformation/BusinessInformation";
import Faq from "./pages/KlassbookSetup/Faq/Faq";
import InvoiceFormat from "./pages/Setup/AccountSetup/InvoiceFormat";
import ReceiptFormat from "./pages/Setup/AccountSetup/ReceiptFormat";
import OtherSetup from "./pages/Setup/AccountSetup/OtherSetup";
import Chat from "./pages/KlassbookSetup/Chat/Chat";
import Schedule from "./pages/Schedule/Schedule";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>

        <Route path="/" element={<Error404 />} />

        <Route path="/business" element={<Business />} />
        <Route path="/business-setup" element={<BusinessSetup />} />
        <Route path="/account-setup/invoice-format" element={<InvoiceFormat/>} />
        <Route path="/account-setup/receipt-format" element={<ReceiptFormat/>} />
        <Route path="/account-setup/other-setup" element={<OtherSetup/>} />
        
        <Route path="branch" element={<Branch />} />
        <Route path="/add-branch" element={<AddBranch />} />
        
        
        <Route path="/courses/subject" element={<Subject />} />
        <Route path="/courses/level" element={<Levels />} />
        <Route path="/courses/curriculum" element={<Curriculum />} />
        <Route path="/courses/courses" element={<Courses />} />
        <Route path="/courses/class" element={<Classes />} />


        <Route path="/courses/class/class-details" element={<ClassDetails />} />

        <Route path="/courses/event" element={<Events/>} />
        <Route path="/courses/event/event-details" element={<EventDetails/>} />

        
        <Route path="/student" element={<Student/>} />
        <Route path="/student/add-student" element={<AddStudent/>} />
        <Route path="/student/student-details" element={<StudentDetails/>} />

        
        <Route path="/batch" element={<Batch/>} />
        <Route path="/batch/add-batch" element={<AddBatch/>} />

        <Route path="/admission" element={<Admission/>} />
        <Route path="/invoice" element={<Invoice/>} />

        <Route path="/receipt" element={<Receipt/>} />
        
        <Route path="/team" element={<Team/>} />
        <Route path="/team/add-team-member" element={<AddTeamMember/>} />
        <Route path="/team/team-details" element={<TeamDetails/>} />


        <Route path="/k-setup/business-info" element={<BusinessInformation/>} />
        <Route path="/k-setup/branch-location" element={<BranchAndLocation/>} />
        <Route path="/k-setup/branch-location-details" element={<BranchAndLocationDetails/>} />
        <Route path="/k-setup/program-courses" element={<ProgramAndCourses/>} />
        <Route path="/k-setup/gallery" element={<Gallery/>} />
        <Route path="/k-setup/faq" element={<Faq/>} />

        
        <Route path="/k-setup/chat" element={<Chat/>} />
        <Route path="/schedule" element={<Schedule/>} />





      </Route>
    </Routes>
  );
};

export default App;
