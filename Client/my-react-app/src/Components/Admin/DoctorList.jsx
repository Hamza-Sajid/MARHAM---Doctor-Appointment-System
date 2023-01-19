import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

function DoctorList() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Address",
      dataIndex: "address",
    },

    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Spacialization",
      dataIndex: "spacialization",
    },

    {
      title: "Fee",
      dataIndex: "fee",
    },
    {
      title: "Experiance/yr",
      dataIndex: "experiance",
    },
    {
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="flex">
          <button
            //here i am passing record becuase it contain the element id,(all details)
            onClick={(e) => handleStatus(record._id, record.status)}
            className="border-2 solid border-white p-2 rounded-lg  font-bold hover:            bg-green-500 text-white "
          >
            {record.status == "Approved" ? "Reject" : "Approve"}
          </button>
        </div>
      ),
    },
  ];

  const handleStatus = (record, status) => {
    // Make a request for a user with a given ID

    // axios POST request
    const options = {
      url: "http://localhost:3000/admin/updatestatus",
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
      },
      //alway put the data in a object, otherewise it will give CORS error
      data: { record, status },
    };
    axios(options).then((response) => {
      console.log(response);
    });
  };
  const [doctors, setDoctor] = useState();

  const fetchUser = () => {
    // axios POST request
    const options = {
      url: "http://localhost:3000/admin/doctor",
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
      },
    };

    axios(options).then((response) => {
      setDoctor(response.data);
    });
  };
  useEffect(() => {
    fetchUser();
  }, [doctors]);

  return (
    <div className="mt-12 w-full block m-auto">
      <Table
        columns={columns}
        dataSource={doctors}
        bordered
        title={() => (
          <div className="text-xl font-medium underline cursor-pointer">
            Registered Doctors Data
          </div>
        )}
      />
    </div>
  );
}

export default DoctorList;
