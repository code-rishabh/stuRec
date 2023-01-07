import "./App.css";
import Student from "./stud";

function ShowAddress({setPage,students}) {
    return (
        <div   className="relative h-[75%] w-[50%] flex  items-center justify-center backdrop-blur-lg bg-white/30 rounded-lg flex-col">
        <img
            src="https://www.latracal.com/images/favicon.png"
            className=" -mx-3 mb-6"
            alt=""
        />
        <p className="text-lg font-medium truncate text-black">No. of students: {students.length}</p>
        <div   className="w-[75%] ">
            <ul   className="w-full divide-y divide-gray-200 dark:divide-gray-700">
            <li  className="py-5 sm:py-4 divide-y divide-gray-200 dark:divide-gray-700">
            {students.map((stud) => (
                <Student last={stud.last} first={stud.first} roll={stud.roll} time={stud.time} key={stud.roll}/>
                    ))}
            </li>
            </ul>
        </div>

        <button
            type="button"
            onClick={(e)=>{setPage(false)}}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 w-4/6"
        >
            Add New Student Record
        </button>
        </div>
    );
}

export default ShowAddress;
