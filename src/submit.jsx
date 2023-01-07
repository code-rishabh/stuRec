import logo from "./logo.svg";
import "./App.css";

function Submit({setPage, setRoll ,roll, last, setLast, setFirst, first, students, setStudents}) {
  const rollHandler = (e) => {
    setRoll(e.target.value);
};
  const lastHandler = (e) => {
    setLast(e.target.value);
};
  const firstHandler = (e) => {
    setFirst(e.target.value);
};
const submitTodoHandler = (e) => {
  e.preventDefault();
  setStudents([
      ...students, { first: first, last:last, roll: roll, time:new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()},
  ]);
  setRoll("");
  setFirst("");
  setLast("");
  setPage(true);
  // console.log(students) 
}

  return (
    <div className="relative h-[75%] w-[50%] flex items-center justify-center backdrop-blur-lg bg-white/30 rounded-lg flex-col">
      <img
        src="https://www.latracal.com/images/favicon.png"
        className=" -mx-3 mb-6"
        alt=""
      />
      <form className="w-full max-w-lg ">
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Roll Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#ff782c] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-city"
              type="text"
              placeholder="000"
              value={roll} onChange={rollHandler}
              required="required" 
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#ff782c] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white  "
              id="grid-last-name"
              type="text"
              placeholder="Raj"
              value={first} onChange={firstHandler}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#ff782c] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-zip"
              type="text"
              placeholder="Koothrapali"
              value={last} onChange={lastHandler}
            />
          </div>
        </div>
      </form>
      <button
        type="submit"
        // onClick={(e)=>{setPage(true)}}
        onClick={submitTodoHandler}
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 w-4/6"
      >
        Submit
        {/* {console.log(students)} */}
      </button>
        
    </div>
  );
}

export default Submit;
