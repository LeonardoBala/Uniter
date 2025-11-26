"use client"
import MeetingTypeList from "@/components/MeetingTypeList";
import { useState, useEffect } from "react";

const Home = () => {
  // State for the date and time
  const [now, setNow] = useState(new Date());

  // Gonna use an useffect to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000); // Updating every second

    // Clean the interval when the component is unmonted
    return () => clearInterval(intervalId);
  }, []); // Empty array, means it runs just one time

  // Format the date and time 
  const rawTime = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  });

  const [time, meridiem] = rawTime.split(' ');

  const date = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">Upcoming Meeting at: 12:30 PM</h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time}
              <span className="ml-2 text-2xl font-bold uppercase text-sky-1 lg:text-4xl">
                {meridiem}
              </span>
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList/>
    </section>
  )
}

export default Home