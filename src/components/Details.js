import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const {
    item: { name, price },
    loading,
  } = useSelector((state) => state.details);
  // const a = useSelector((state) => state.details);
  // console.log(a);
  const navigate = useNavigate();

  return (
    <>
      <h1> Details </h1>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          {" "}
          {name} цена: {price}{" "}
        </div>
      )}
      <button onClick={() => navigate(`/`)}>назад</button>
    </>
  );
}
