import React, { useCallback, useEffect, useRef, useState } from "react";
import { day, clock, timeContainer } from "./header/Header.module.css";
import useEffectiveTheme from "../hooks/useEffectiveTheme";

const TimeDate = () => {
  const [currentTimeDate, setCurrentTimeDate] = useState({
    time: "",
    day: "",
  });
  const mountedRef = useRef(false);
  const effectiveTheme = useEffectiveTheme();

  const isDark = effectiveTheme === "dark";

  const updateDateTime = useCallback(() => {
    const now = new Date();
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formateDate = now.toLocaleDateString("en-US", dateOptions);
    const formateTime = now.toLocaleTimeString("en-US", timeOptions);
    if (mountedRef.current) {
      setCurrentTimeDate({
        time: formateTime,
        day: formateDate,
      });
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    const initialTimeoutId = setTimeout(() => {
      if (mountedRef.current) {
        updateDateTime();
      }
    }, 0);
    const intervalId = setInterval(updateDateTime, 1000);
    return () => {
      mountedRef.current = false;
      clearTimeout(initialTimeoutId);
      clearInterval(intervalId);
    };
  }, [updateDateTime]);

  return (
    <div className={timeContainer}>
      <time
        dateTime="date"
        className={`${day} ${isDark ? "text-zinc-500" : "text-stone-600"}`}
      >
        {currentTimeDate.day}
      </time>
      <time
        dateTime="time"
        className={`${clock} ${
          isDark
            ? "text-slate-200 bg-zinc-800/50"
            : "text-slate-900 bg-stone-100"
        }`}
      >
        {currentTimeDate.time}
      </time>
    </div>
  );
};

export default TimeDate;
