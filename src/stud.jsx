const Student = ({last,first,roll,time}) => {
  return (
    <div className="flex items-center space-x-4 py-2 w-full">
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
          alt="Stud image"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate text-black">{first+" "+last} </p>
        <p className="text-sm text-gray-600 truncate">RollNo.:{roll}</p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-black/70">
        {time}
      </div>
    </div>
  );
};

export default Student;
