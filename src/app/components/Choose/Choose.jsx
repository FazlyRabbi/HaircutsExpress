import React, { useState, useEffect } from "react";

import useStore from "@/app/store/store";

import { TabsNav } from "../TabsNav";

import {
  Button,
  Spinner,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { useSevenDaysFromToday } from "../lib/useSevenDaysFromToday";
import {
  ChevronDoubleLeftIcon,
  ScissorsIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import axios from "axios";
import useSWR from "swr";
import moment from "moment";
import dateFormat from "dateformat";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.success("Appointment Succfully booked!", {
    position: "bottom-right",
  });

const init = {
  serviceName: "",
  date: "",
  time: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
};

function formatDate(inputDateString) {
  const inputDate = new Date(inputDateString);

  if (!isNaN(inputDate)) {
    const daysOfWeek = ["su", "mo", "tu", "we", "th", "fr", "sa"];
    const formattedDayOfWeek = daysOfWeek[inputDate.getDay()]; // Get the day of the week abbreviation
    const formattedDay = dateFormat(inputDate, "d"); // Extract day without leading zero

    return `${formattedDay}${formattedDayOfWeek}`;
  } else {
    console.error("Invalid date format:", inputDateString);
    return null;
  }
}

function Choose() {
  const {
    timeSlots,
    setTimeSlot,
    service: services,
    fetchService,
  } = useStore();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    handleClear();
  };

  const [date, setDate] = useState(null);
  const [client, setClient] = useState(init);

  const { data, error, isLoading } = useSWR(
    date ? [date] : null, // Pass the key only if date is not null
    async (key) => {
      const [selectedDate] = key; // Destructure the date from the key

      const response = await axios.put(
        `${process.env.API_URL}/api/createslot`,
        {
          date: selectedDate, // Use the selected date from the destructured key
        }
      );

      setClient({ ...client, date: date });
      setTimeSlot(response?.data?.data); // Return the data from the response
    }
  );

  const [next, setNext] = useState(false);

  const [service, setService] = useState(null);

  const [loading, setLoading] = useState(false);
  const todayDate = moment().format("MM/DD/YYYY");

  const handleClear = () => {
    handlePrev();
    setClient({
      serviceName: "",
      date: "",
      time: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    });
  };

  useEffect(() => {
    setDate(todayDate);
    fetchService();
  }, []);

  const refetch = async () => {
    if (date === todayDate) {
      const response = await axios.put(
        `${process.env.API_URL}/api/createslot`,
        {
          date: date, // Use the selected date from the destructured key
        }
      );
      setTimeSlot(response?.data?.data);
      return;
    }
  };

  const { formattedDates } = useSevenDaysFromToday();

  const handleNext = (e) => {
    setNext(true);
    setClient({
      ...client,
      serviceName: e.target.nextElementSibling.innerText,
    });
    setService(e.target.nextElementSibling.innerText);
  };

  const handlePrev = () => {
    setNext(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Make a POST request using Axios
      const blockResponse = await axios.post(
        `${process.env.API_URL}/api/blockSlot`,
        {
          date: client?.date,
          timeSlot: client?.time,
        }
      );

      if (!blockResponse.data.ok) {
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${process.env.API_URL}/api/client`,
        client
      );

      if (response.data.ok) {
        setOpen(true);

        refetch();
        // setDate(todayDate);
        setLoading(false);
        notify();
        return;
      } else {
        setLoading(false);
      }
    } catch (error) {
      // Handle errors that occurred during the request
      console.error("Error making POST request:", error);
      // You can throw the error to propagate it up the call stack
      throw error;
    }
  };

  return (
    <section className="bg-[#F5EEE7] h-full ">
      <div className="about_bg_img w-full py-[6.5rem] ">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h2 className="text-4xl md:text-6xl  font-co font-bold py-2  lg:py-4 tracking-[1px]">
              Check In
            </h2>
          </div>
        </div>
      </div>

      <Toaster />

      {/* daynamic content  */}

      {timeSlots.length === 0 ? (
        <div className=" h-[80vh] flex items-center justify-center">
          <Spinner className="h-10 w-10" />
        </div>
      ) : (
        <div className=" container mx-auto py-10">
          
          <div className=" lg:grid-cols-2 gap-x-10 grid grid-cols-1">
            <div className="mt-5">
              <TabsNav />
            </div>
            <div className="mt-5">
              <div className=" flex border-b-2 border-gray-800  mb-4  hover:space-x-4 space-x-2  transition-all duration-300">
                <ChevronDoubleLeftIcon className="h-6 w-6 mt-1 text-black" />

                <h1 className="   border-gray-900  mb-4  font-semibold text-2xl font-co text-gray-900">
                  Check-in
                </h1>
              </div>

              {/* dynamic content */}

              {!next ? (
                <div>
                  <div>
                    <div className="  font-semibold p-2 pl-4 max-w-2xl bg-black text-white">
                      Haircut Services
                    </div>

                    <ul className="mt-5 pl-2">
                      {services?.map((name, index) => (
                        <li
                          key={index}
                          className=" mb-8 flex cursor-pointer space-x-5 items-center"
                        >
                          <Button
                            size="sm"
                            onClick={(e) => handleNext(e)}
                            className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                            variant="outlined"
                          >
                            Add
                          </Button>
                          <p className=" text-gray-800 font-semibold">
                            {name?.name}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <div className=" flex  items-center space-x-2">
                    <ScissorsIcon className="h-6 w-6   rotate-45" />

                    <h1 className="  font-semibold text-2xl font-co">
                      Servies
                    </h1>
                  </div>

                  <p className="my-5 ">{service}</p>
                  <Button
                    size="sm"
                    onClick={() => handlePrev()}
                    className=" hover:bg-black hover:text-white  outline-[8px]  font-semibold"
                    variant="outlined"
                  >
                    Add another service
                  </Button>

                  <div className="mt-5">
                    <div className=" flex  space-x-2">
                      <CalendarDaysIcon className="h-6 w-6 " />

                      <h1 className="  text-xl font-semibold">Date</h1>
                    </div>

                    <div className=" flex  space-x-4">
                      {formattedDates?.map((da) => {
                        const formattedDate = formatDate(da);

                        const [day, abbreviation] = [
                          formattedDate.slice(0, 1),
                          formattedDate.slice(1),
                        ];

                        return (
                          <div
                            onClick={() => setDate(da)}
                            key={da}
                            className={`border-2 text-black border-[#14100c] max-w-[4rem]   transition-all duration-300   uppercase cursor-pointer w-full mt-2 text-center rounded-md p-2 flex flex-col justify-center font-semibold  ${
                              client.date === da
                                ? "  text-white  bg-[#14100c]"
                                : ""
                            }`}
                          >
                            <div>
                              <p>{abbreviation}</p>
                              <p>{day}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className=" flex space-x-2 ">
                      <ClockIcon className="h-7 w-7 " />

                      <h1 className="  text-xl font-semibold">
                        Estimated Check-In Time
                      </h1>
                    </div>

                    <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 ">
                      {timeSlots &&
                        timeSlots.map((slot, index) => (
                          <div
                            onClick={() =>
                              setClient({ ...client, time: slot?.timeSlot })
                            }
                            key={index}
                            className={` border-2  border-[#14100c] py-1 
                        transition-all duration-300
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c]  ${
                      client?.time === slot?.timeSlot
                        ? "  text-white  bg-[#14100c]"
                        : ""
                    }`}
                          >
                            <p>{slot?.timeSlot}</p>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Guests */}
                  <div className=" mt-5">
                    <h1 className="  text-xl font-semibold my-4">Guests</h1>
                    <h1 className="mb-5">All Fields are requared</h1>
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4 flex  flex-col">
                          <label
                            htmlFor="firstName"
                            className=" mb-2  font-semibold"
                          >
                            First Name
                          </label>
                          <input
                            onChange={(e) =>
                              setClient({
                                ...client,
                                firstName: e.target.value,
                              })
                            }
                            value={client.firstName}
                            required
                            disabled={loading}
                            id="firstName"
                            variant="standard"
                            placeholder="FirstName"
                            className=" text-[#14100c]   p-2 placeholder:text-[14100c]"
                          />
                        </div>
                        <div className="mb-4 flex  flex-col">
                          <label
                            htmlFor="lastName"
                            className=" mb-2  font-semibold"
                          >
                            Last Name
                          </label>
                          <input
                            onChange={(e) =>
                              setClient({ ...client, lastName: e.target.value })
                            }
                            value={client.lastName}
                            required
                            disabled={loading}
                            id="lastName"
                            variant="standard"
                            placeholder="LastName"
                            className=" text-[#14100c]   p-2 placeholder:text-[14100c]"
                          />
                        </div>
                        <div className="mb-4 flex  flex-col">
                          <label
                            htmlFor="phone"
                            className=" mb-2  font-semibold"
                          >
                            Phone Number
                          </label>
                          <input
                            onChange={(e) =>
                              setClient({
                                ...client,
                                phoneNumber: e.target.value,
                              })
                            }
                            disabled={loading}
                            value={client.phoneNumber}
                            required
                            type="number"
                            id="phone"
                            variant="standard"
                            placeholder="Phone"
                            className=" text-[#14100c]   p-2 placeholder:text-[14100c]"
                          />
                        </div>
                        <div className="mb-4 flex  flex-col">
                          <label
                            htmlFor="email"
                            className=" mb-2  font-semibold"
                          >
                            Email
                          </label>
                          <input
                            onChange={(e) =>
                              setClient({ ...client, email: e.target.value })
                            }
                            value={client.email}
                            required
                            disabled={loading}
                            type="email"
                            id="email"
                            variant="standard"
                            placeholder="Email"
                            className=" text-[#14100c]   p-2 placeholder:text-[14100c]"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className=" flex justify-center hover:bg-black mt-5 uppercase w-full font-bold hover:text-white   "
                          variant="solid"
                        >
                          {loading ? (
                            <Spinner className="h-6 w-6" />
                          ) : (
                            "Check-in"
                          )}
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {/* dynamic content */}
            </div>
          </div>
        </div>
      )}

      {/* Appointment Dialog */}

      <Dialog
        open={open}
        handler={handleOpen}
        className="max-w-[5rem]  md:text-center"
      >
        <DialogBody className="pt-8">
          <p>
            Your Choosen Service :{" "}
            <span className=" font-semibold">{client?.serviceName}</span>
          </p>
          <p>
            Name: <span className=" font-semibold">{client?.firstName}</span>
          </p>
          <p>
            Email: <span className=" font-semibold">{client?.email}</span>
          </p>
          <p>
            Date: <span className=" font-semibold">{client?.date}</span>
          </p>
          <p>
            Your Selected Time:{" "}
            <span className=" font-semibold">{client?.time}</span>
          </p>
        </DialogBody>
        <DialogHeader className=" flex  text-green-400 e justify-center items-center">
          Thanks for Choosing Us!
        </DialogHeader>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Ok</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}

export default Choose;
