import React, { useState } from "react";
import { Link } from "react-router-dom";

function ApiCard(props) {
  const setHide = (id) => {
    props.filterApi(id);
  };

  return (
    <>
      <div className="cardApp m-3 ">
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.api.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.api.title}</h5>
            <p className="card-text">{props.api.description}</p>
            <p>
              Auther : <b>{props.api.author}</b>
            </p>

            <div className="hide_show d-flex justify-content-between">
              <Link to="/api/create" state={{ apiupdate: props.api }}>
                <button className="btn btn-success">update</button>
              </Link>

              <button
                className="btn btn-info"
                onClick={() => setHide(props.api._id)}
              >
                hide
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApiCard;
