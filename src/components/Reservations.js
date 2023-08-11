import React from "react";
import ReservationForm from "./ReservationForm";
import { useReducer } from "react";
import { fetchAPI } from "./ResAPI";
import "./Reservations.css";

export default function Reservations() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <div id="reservationsHeading">
        <h1>Reserve a table!</h1>
      </div>
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
