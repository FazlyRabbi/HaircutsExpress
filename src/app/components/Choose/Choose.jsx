import React, { useState, useEffect } from "react";
import useStore from "@/app/store/store";
import { TabsNav } from "../TabsNav";
import { Button, Spinner } from "@material-tailwind/react";
import { useSevenDaysFromToday } from "../lib/useSevenDaysFromToday";
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

  const { timeSlots, setTimeSlot } = useStore();

  const [next, setNext] = useState(false);
  const [date, setDate] = useState(null);
  const [service, setService] = useState(null);
  const [client, setClient] = useState(init);
  const [loading, setLoading] = useState(false);

  const todayDate = moment().format("MM/DD/YYYY");

  useEffect(() => {
    setDate(todayDate);
    createUpdateSlots();
    setClient({ ...client, date: date });
  }, []);

  useEffect(() => {
    setClient({ ...client, date: date });
  }, [date]);

  // create slots
  const createUpdateSlots = async () => {
    const response = await axios.post(`${process.env.API_URL}/createslot`);
  };

  // Update the key whenever the 'date' state changes
  const { data, error, isLoading, refetch } = useSWR(
    ["post-date-data", date], // Use 'date' as a dependency in the key
    async (key) => {
      const [, selectedDate] = key; // Destructure the date from the key
      const response = await axios.put(`${process.env.API_URL}/createslot`, {
        date: selectedDate, // Use the selected date from the destructured key
      });

      setTimeSlot(response?.data?.data);
    }
  );

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

     console.log(timeSlots);
    e.preventDefault();
    try {
      setLoading(true);
      // Make a POST request using Axios
      const response = await axios.post(
        `${process.env.API_URL}/client`,
        client
      );

      if (response.data.ok) {
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
    // Update the 'date' state, triggering a re-fetch of the data
  };

  return (
    <section className="bg-[#F5EEE7] h-full ">
      <div className="about_bg_img w-full py-40 ">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h2 className="text-4xl md:text-6xl font-bold py-2  lg:py-4 tracking-[1px]">
              Check In
            </h2>
          </div>
        </div>
      </div>

      <Toaster />

      {/* daynamic content  */}

      <div className=" container mx-auto py-10">
        <div className=" md:grid-cols-2 gap-x-10 grid grid-cols-1">
          <div className="mt-5">
            <TabsNav />
          </div>
          <div className="mt-5">
            <h1 className=" border-b  border-gray-900  mb-4  font-semibold text-2xl text-gray-900">
              Chect-In
            </h1>

            {/* dynamic content */}

            {!next ? (
              <div>
                <div>
                  <div className="  font-semibold p-2 max-w-2xl bg-black text-white">
                    Haircut
                  </div>

                  <ul className="mt-5">
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={(e) => handleNext(e)}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Add
                      </Button>
                      <p className=" text-gray-800 font-semibold">
                        Haircuts Express
                      </p>
                    </li>
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={(e) => handleNext(e)}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Add
                      </Button>
                      <p className=" text-gray-800 font-semibold">
                        Haircuts Express With Shampoo
                      </p>
                    </li>
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={(e) => handleNext(e)}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Add
                      </Button>
                      <p className=" text-gray-800 font-semibold">
                        Haircuts Express Jr.
                      </p>
                    </li>
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={(e) => handleNext(e)}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Add
                      </Button>
                      <p className=" text-gray-800 font-semibold">
                        Haircuts Express Sr.
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="  font-semibold p-2 max-w-2xl bg-black text-white">
                    Beard Trim
                  </div>

                  <ul className="mt-5">
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={() => handleNext()}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Beard
                      </Button>
                      <p className=" text-gray-800 font-semibold">
                        Haircuts Express
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="  font-semibold text-2xl">Servies</h1>
                <p className="my-5">{service}</p>
                <Button
                  size="sm"
                  onClick={() => handlePrev()}
                  className=" hover:bg-black hover:text-white  outline-[8px]  font-semibold"
                  variant="outlined"
                >
                  Add another service
                </Button>

                <div className="mt-5">
                  <h1 className="  text-xl font-semibold">Date</h1>
                  <div className=" flex  space-x-4">
                    {formattedDates.map((da) => {
                      const formattedDate = formatDate(da);

                      const [day, abbreviation] = [
                        formattedDate.slice(0, 2),
                        formattedDate.slice(2),
                      ];

                      return (
                        <div
                          onClick={() =>  setDate(da)}
                          key={da}
                          className={`border-2 text-black border-[#14100c] max-w-[4rem]   transition-all duration-300   uppercase cursor-pointer w-full mt-2 text-center rounded-md p-2 flex flex-col justify-center font-semibold  ${
                            client.date === da
                              ? "  text-white  bg-[#14100c]"
                              : ""
                          }`}
                        >
                          <p>{day}</p>
                          {/* <p>{abbreviation}</p> */}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5">
                  <h1 className="  text-xl font-semibold">
                    Estimated Check-In Time
                  </h1>
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
                      client?.time === slot?.timeSlot ? "  text-white  bg-[#14100c]" : ""
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
                            setClient({ ...client, firstName: e.target.value })
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
                        <label htmlFor="phone" className=" mb-2  font-semibold">
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
                        <label htmlFor="email" className=" mb-2  font-semibold">
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
                        {loading ? <Spinner className="h-6 w-6" /> : "Check-in"}
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
    </section>
  );
}

export default Choose;
