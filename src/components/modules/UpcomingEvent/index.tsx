import React, { useEffect } from "react";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { getEventList } from "@/store/slices/eventSlice";

const events = [
  {
    id: 1,
    date: "13",
    month: "Jul",
    title: "Honoring Yogi Bhajan's Birthday 2020",
    time: "8:00 am",
    img: "/images/event-1.jpg",
  },
  {
    id: 2,
    date: "06",
    month: "Aug",
    title: "Gong Yoga Relaxation and Meditation",
    time: "9:00 am",
    img: "/images/event-1.jpg",
  },
  {
    id: 3,
    date: "19",
    month: "Sep",
    title: "September New Moon Gong",
    time: "7:00 am",
    img: "/images/event-1.jpg",
  },
  {
    id: 4,
    date: "09",
    month: "Oct",
    title: "Kundalini Yoga to Melt Unhealthy Habits",
    time: "6:30 am",
    img: "/images/event-1.jpg",
  },
];

const Index = () => {
  const { eventList, isLoading, error } = useSelector(
    (state: RootState) => state.events
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getEventList());
  }, []);
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Heading title="EVENTS" subtitle="Upcoming Events And Workshops" />

        <div className="space-y-4">
          {eventList.map((e) => (
            <div
              key={e.id}
              className="flex items-center bg-white rounded shadow-sm overflow-hidden"
            >
              {e?.image ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${e.image}`}
                  alt={e.title}
                  className="w-28 h-20 object-cover"
                />
              ) : (
                <div className="w-28 h-20 bg-gray-200 animate-pulse" />
              )}
              <div className="px-4 py-3 flex-1">
                <div className="flex items-baseline gap-4 justify-center">
                  <div className="text-sm text-sky-500 font-semibold">
                    <div className="text-xl font-bold">{e.date}</div>
                    {/* <div className="text-xs uppercase">{e.month}</div> */}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-2xl">
                      {e.title}
                    </h4>
                    <p className="text-slate-500">{e.description}</p>
                    <p className="text-xs text-slate-500">{e.time}</p>
                  </div>
                </div>
              </div>
              <div className="px-6">
                <Button
                  text="More Info"
                  classnames="!py-1 !px-3 !text-sm"
                  isPrimary
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
