import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Table } from "antd";

function UserList() {
  const [user, setUser] = useState();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Address",
      dataIndex: "email",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="flex">
          <button
            className="border-2 solid border-gray-700 p-2 rounded text-black  bg-white
            hover:            bg-gray-700 text-white

          "
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  // Make a request for a user with a given ID
  const fetchUser = () => {
    // axios POST request
    const options = {
      url: "http://localhost:3000/admin/user",
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
      },
    };

    axios(options).then((response) => {
      //   console.log(response);
      setUser(response.data);
    });
  };
  useEffect(() => {
    fetchUser();
  }, [0]);
  console.log(user);
  return (
    <div className="mt-12 w-full block m-auto">
      <Table
        columns={columns}
        dataSource={user}
        bordered
        title={() => (
          <div className="text-xl font-medium underline cursor-pointer">
            Registered User Data
          </div>
        )}
      />
    </div>
  );
}

export default UserList;
