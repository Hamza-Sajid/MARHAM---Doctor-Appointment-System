import React, { useState } from "react";
import { IoLogOut, IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Badge, Button, notification } from "antd";
import { AiFillBell } from "react-icons/ai";
import axios from "axios";

function Header() {
  const [api, contextHolder] = notification.useNotification();

  const [profileToolTip, setProfileToolTip] = useState(false);
  // const [notifications, setNotifications] = useState();

  const navigate = useNavigate();
  const users = useSelector((state) => state.user);
  //   console.log(user.user.name);
  //   const [user, setUser] = useState();
  let name = "loading";
  var notificationNo = 0;
  var notificationTexts;
  if (users.user) {
    name = users.user.name;
    notificationNo = users.user.notification.length;
    notificationTexts = users.user.notification;
  } else {
    name = "loading";
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  console.log(notificationTexts);

  const clearNotification = (index) => {
    var index2 = index;
    const options = {
      url: "http://localhost:3000/notifications",
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { index },
    };
    axios(options).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="flex flex-row w-full">
      <div className=" w-3/4"></div>
      <div className="flex justify-between  w-1/6 ml-16 mt-2">
        {contextHolder}

        <Badge
          onClick={() => {
            api.open({
              message: "Notifications",
              description: notificationTexts.map((e, index) => {
                return (
                  <div className="mt-4">
                    <h4
                      onClick={() => clearNotification(index)}
                      className=" mt-2  p-2 cursor-pointer font-semibold text-base bg-green-100 border rounded-lg text-center"
                    >
                      {e.type}
                    </h4>
                    <p>{e.message}</p>
                  </div>
                );
              }),

              icon: <AiFillBell style={{ color: "#108ee9" }} />,
              // ({{console.log("Done")}})
              // <div>
              //   <h4 className="font-semibold text-base">HEADING</h4>
              //   <p>asd</p>
              // </div>
            });
          }}
          size="default"
          count={notificationNo}
        >
          <Avatar shape="square" size="large" />
          <IoNotificationsOutline className="text-3xl text-white  absolute left-1 top-1 inline" />
        </Badge>

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
