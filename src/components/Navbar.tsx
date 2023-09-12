import logo from "../assets/logo.svg";
// import { LuSearch, LuSettings } from "react-icons/lu";
// import { IoNotificationsOutline } from "react-icons/io5";
import { useAppSelector } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { loading, user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const isAuthenticated = !!user;
  // console.log(user);
  return (
    <div className="transition-all ease-in-out duration-400 flex justify-between items-center px-[20px] md:px-[100px] py-[10px] relative w-full h-[65px]">
      <div>
        <img
          src={logo}
          alt="logo"
          className="object-contain w-[135px] md:w-[170px] hover:cursor-pointer"
          onClick={() => navigate("/business-plan")}
        />
      </div>
      {isAuthenticated && (
        <div className="flex gap-[15px]">
          <div className="flex gap-[5px]">
            {/*  <div className="flex items-center justify-center rounded-full w-10 h-10 hover:cursor-pointer hover:bg-[#f8f2fe]">
              <LuSearch color="rgba(65, 36, 94, 0.52)" size={22} />
            </div>
            <div className="flex items-center justify-center rounded-full w-10 h-10 hover:cursor-pointer hover:bg-[#f8f2fe]">
              <LuSettings color="rgba(65, 36, 94, 0.52)" size={22} />
            </div> 
            <div className="flex items-center justify-center rounded-full w-10 h-10 hover:cursor-pointer hover:bg-[#f8f2fe]">
              <IoNotificationsOutline
                color="rgba(65, 36, 94, 0.52)"
                size={22}
              />
            </div>*/}
          </div>
          <div>
            <div className="flex items-center justify-center rounded-full bg-[#f4edfb] w-10 h-10  hover:cursor-pointer hover:bg-[#efe5f8]">
              {loading ? (
                ".."
              ) : (
                <img
                  src={user?.picture}
                  alt="User Avatar"
                  className="object-cover w-full h-full rounded-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
