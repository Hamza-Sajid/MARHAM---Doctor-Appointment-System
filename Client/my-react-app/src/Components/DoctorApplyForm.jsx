import { Button, Modal, Result } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TimePicker from "react-time-picker";

function DoctorApplyForm({ id }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [value, onChange] = useState("10:00");

  const [form, setForm] = useState({
    id: id,
    name: "",
    phone: "",
    email: "",
    address: "",
    spacialization: "",
    experiance: "",
    fee: "",
    timingfrom: "",
    timingto: "",
  });

  const postAPI = () => {
    const options = {
      url: "http://localhost:3000/applydoc",
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: form,
    };

    axios(options)
      .then((response) => {
        if ((response.data.message = "applied succesfully")) {
          console.log("i am happy boss");
          setIsModalOpen(true);
        } else {
          alert("INVALID FORM ENTRY , ENTER VALID DATA");
        }
      })
      .catch((e) => {
        alert("INVALID FORM ENTRY , ENTER VALID DATA");

        console.log("Error :> " + e);
      });
  };

  useEffect(() => {}, [0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postAPI();
  };
  return (
    <div>
      <h2 className="font-semibold text-2xl">
        Join our team and help people remotly
      </h2>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Result
          status="success"
          title="Your application has been submited sucessfully!"
          subTitle="You will receive back message very soon."
          extra={[
            <Button
              type="dashed"
              key="console"
              onClick={(e) => {
                setIsModalOpen(false);
                navigate("/");
              }}
              navigate="/"
            >
              Go to Dashboard
            </Button>,
          ]}
        />
      </Modal>

      <form>
        <div>
          <div className="mb-6 mt-8">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              value={form.name}
              onChange={(e) =>
                setForm((old) => ({
                  ...old,
                  name: e.target.value,
                }))
              }
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Ahmad"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
              value={form.phone}
              onChange={(e) =>
                setForm((old) => ({
                  ...old,
                  phone: e.target.value,
                }))
              }
              type="phone"
              id="phone"
              placeholder="0123-43242-234"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((old) => ({
                  ...old,
                  email: e.target.value,
                }))
              }
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@abc.com"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="Address"
              id="Address"
              value={form.address}
              onChange={(e) =>
                setForm((old) => ({
                  ...old,
                  address: e.target.value,
                }))
              }
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="I-9 , ISB"
              required
            />
          </div>

          <div>
            <h2>Select your specialization</h2>
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            <select
              selected={form.spacialization}
              onChange={(e) =>
                setForm((old) => ({
                  ...old,
                  spacialization: e.target.value,
                }))
              }
              id="underline_select"
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value="ENT">ENT</option>
              <option value="Cardic">Cardic</option>
              <option value="General Physician">General Physician</option>
              <option value="Gastro">Gastro</option>
            </select>
          </div>

          <div className="mt-3">
            <div className="w-2/4 inline">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Experiance{" "}
              </label>
              <input
                type="number"
                id="experiance"
                value={form.experiance}
                onChange={(e) =>
                  setForm((old) => ({
                    ...old,
                    experiance: e.target.value,
                  }))
                }
                className="inline w-2/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="5"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>

            <div className="w-2/3 mt-3">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fee / rs{" "}
              </label>
              <input
                type="number"
                id="fee"
                value={form.fee}
                onChange={(e) =>
                  setForm((old) => ({
                    ...old,
                    fee: e.target.value,
                  }))
                }
                className="w-2/4 inline bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="2000"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>

          <div className="mt-2">
            <h2>Your Availability Timing</h2>
            <label htmlFor="underline_select" className="sr-only">
              Time
            </label>
            <h2 className="inline">From </h2>
            <TimePicker
              className="mt-2"
              onChange={(value) =>
                setForm((old) => ({
                  ...old,
                  timingfrom: value,
                }))
              }
              value={value}
            />

            <h2 className="ml-3 inline">to </h2>
            <TimePicker
              className="mt-2"
              onChange={(value) =>
                setForm((old) => ({
                  ...old,
                  timingto: value,
                }))
              }
              value={value}
            />
          </div>

          <div className="flex items-start mb-6 mt-10">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                defaultValue
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        </div>
      </form>
    </div>
  );
}

export default DoctorApplyForm;
