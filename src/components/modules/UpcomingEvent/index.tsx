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

  // Helper function to format date
  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      year: date.getFullYear(),
      fullMonth: date.toLocaleDateString("en-US", { month: "long" }),
    };
  };

  useEffect(() => {
    dispatch(getEventList());
  }, [dispatch]);
  return (
    <section className="bg-slate-50 py-30">
      <div className="layout-spacing mx-auto px-6 text-center">
        <Heading title="EVENTS" subtitle="Upcoming Events And Workshops" />

        <div className="space-y-4">
          {eventList.map((e) => {
            const dateInfo = formatEventDate(e.date);
            return (
              <div
                key={e.id}
                className="flex items-center bg-white rounded shadow-sm overflow-hidden"
              >
                {e?.image ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${e.image}`}
                    alt={e.title}
                    className="w-40 aspect-square object-cover"
                  />
                ) : (
                  <div className="w-28 aspect-square bg-gray-200 animate-pulse" />
                )}
                <div className="p-4 flex-1 relative pl-20">
                  <div className="flex items-baseline gap-4 justify-center">
                    <div className="absolute left-[-60] font-semibold min-w-[60px] rounded-full bg-slate-100 p-4 flex-col aspect-square flex justify-center items-center">
                      <div className="text-2xl font-bold text-gray-800">
                        {dateInfo.day} {dateInfo.month}
                      </div>
                      <div className="text-xs text-gray-500">
                        {dateInfo.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 text-3xl mb-4">
                        {e.title}
                      </h4>
                      <p className="text-slate-500 text-sm mb-4">
                        {e.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        {e.time && (
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {e.time}
                          </span>
                        )}
                        {e.location && (
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {e.location}
                          </span>
                        )}
                      </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Index;
