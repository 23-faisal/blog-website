import { GoProjectSymlink } from "react-icons/go";
import { CiCoffeeCup } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";

const Counter = () => {
  return (
    <div>
      <div className="flex items-center gap-10 my-20">
        <div className="w-1/2">
          <img 
            className="w-full h-[70%] object-cover rounded-md"
            src="https://img.freepik.com/free-photo/beautiful-woman-speaking-by-video-call-with-tablet-outdoors_496169-2936.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696550400&semt=ais"
            alt=" A Lady"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-titleFont font-extrabold  leading-relaxed my-5 text-gray-800 ">
            <svg
              className="fill-teal-600 inline-block mb-5 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            If you want to build something big, you have to start with a small
            step!
            <svg
              className="fill-teal-600 inline-block mb-5 ml-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
          </h1>
          <p className="text-md font-bodyFont leading-relaxed text-gray-500 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &#39;Content here,
            content here&#39;. Lorem Ipsum has been the industry&#39;s standard
            dummy text ever since.
          </p>
        </div>
      </div>
      <div className="bg-[#FFDC39] py-16 my-20 rounded-lg flex ">
        {/* Project Completed  */}

        <div className="flex items-center justify-center w-1/4 gap-2">
          <GoProjectSymlink className="h-16 w-16 text-slate-950  " />
          <div className="">
            <p className="text-xl text-slate-950 font-bold tracking-wide">
              1971+
            </p>
            <p className="text-xs font-light">Project Completed</p>
          </div>
        </div>

        {/* Cups of Coffee */}

        <div className="flex items-center justify-center w-1/4 gap-2">
          <CiCoffeeCup className="h-16 w-16 text-slate-950  " />
          <div className="">
            <p className="text-xl text-slate-950 font-bold tracking-wide">
              1247+
            </p>
            <p className="text-xs font-light">Cups of Coffee</p>
          </div>
        </div>

        {/* Worldwide Client */}

        <div className="flex items-center justify-center w-1/4 gap-2">
          <IoIosPeople className="h-16 w-16 text-slate-950  " />
          <div className="">
            <p className="text-xl text-slate-950 font-bold tracking-wide">
              1763
            </p>
            <p className="text-xs font-light">Worldwide Clients</p>
          </div>
        </div>

        {/* Countries */}

        <div className="flex items-center justify-center w-1/4 gap-2">
          <BiWorld className="h-16 w-16 text-slate-950  " />
          <div className="">
            <p className="text-xl text-slate-950 font-bold tracking-wide">
              109
            </p>
            <p className="text-xs font-light">Countries</p>
          </div>
        </div>

        {/* End */}
      </div>
    </div>
  );
};

export default Counter;
