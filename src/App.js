import Assessments from './Assessments';
import Attendance from './Attendance';
import Classes from "./Classes";
import Placements from "./Placements";



function App() {
  return (
          <>
             <h1>
              KodNest App
              <Classes />
              <Attendance />
              <Placements />
              <Assessments />
             </h1>
          
          </>
  );
}

export default App;
