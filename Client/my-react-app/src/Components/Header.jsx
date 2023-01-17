import React, { useState } from "react";
import { IoLogOut, IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const [profileToolTip, setProfileToolTip] = useState(false);

  const navigate = useNavigate();
  const users = useSelector((state) => state.user);
  //   console.log(user.user.name);
  //   const [user, setUser] = useState();
  let name = "loading";
  if (users.user) {
    name = users.user.name;
  } else {
    name = "loading";
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex flex-row w-full">
      <div className=" w-3/4"></div>
      <div className="flex justify-between  w-1/6 ml-16 mt-2">
        <IoNotificationsOutline className="text-3xl  inline" />
        <h4 className="inline">{name ? name : "loading"}</h4>
        <FaUserCircle
          onClick={(e) => setProfileToolTip(!profileToolTip)}
          className="cursor-pointer text-3xl inline"
        />
        {profileToolTip == false ? (
          <></>
        ) : (
          <div
            id="toast-top-right"
            className="absolute mt-12 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
            role="alert"
          >
            <div className="text-sm font-normal">
              <button className="font-bold" onClick={handleLogOut}>
                <IoLogOut className="inline text-3xl mr-2" />
                LogOut
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
