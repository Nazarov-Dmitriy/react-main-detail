import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addListRequest, addDetailsRequest } from "../actions/actionsCreators";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const { items, loading, error } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(addListRequest());
  }, [dispatch]);

  const handkeRepeatRequest = () => {
    dispatch(addListRequest());
  };

  const handkeDeteils = (id) => {
    dispatch(addDetailsRequest(id));
    navigate(`/${id}/details`);
  };

  return (
    <>
      <h1>List Details</h1>
      <ul>
        {loading ? (
          <div className="loader"></div>
        ) : (
          items?.map((o) => (
            <li key={o.id} onClick={() => handkeDeteils(o.id)}>
              {o.name}
            </li>
          ))
        )}
      </ul>
      {error && <div>Произошла ошибка<button onClick={handkeRepeatRequest}>Повторный запрос</button></div>}
    </>
  );
}
