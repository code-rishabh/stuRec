import logo from "./logo.svg";
import "./App.css";
import Submit from "./submit";
import ShowAddress from "./allAddress";
import { useState } from "react";




function App() {
  const [page,setPage] = useState(false)
  const [roll, setRoll] = useState("");
  const [last, setLast] = useState("");
  const [first, setFirst] = useState("");
  const [students, setStudents] = useState([]);
  
  return (
    <div className="bg-gradient-to-r from-[#ff782c] to-[rgb(244,204,181)] h-screen w-screen flex items-center justify-center">
      <img className="absolute h-screen w-screen" src="https://img.freepik.com/free-photo/ready-back-school_1134-12.jpg?w=2000" alt="" />
      {page?<ShowAddress setPage= {setPage} students={students}/>:<Submit setPage= {setPage} setRoll={setRoll} roll={roll} students={students} setStudents={setStudents} last={last} setLast={setLast} first={first} setFirst={setFirst}/>}
      {/* <ShowAddress/> */}
      {/* {console.log(students)}  */}
      
    </div>
  );
}

export default App;
