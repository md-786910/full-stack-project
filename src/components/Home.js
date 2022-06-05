import React, { useEffect, useState } from "react";
import ApiCard from "./ApiCard";

function Home() {
  const [apis, setApis] = useState([]);

  const fetchApi = async () => {
    try {
      const resp = await fetch("https://api-devlopment.herokuapp.com/api", {
        method: "GET",
      });
      const data = await resp.json();
      // console.log(data);
      setApis(data.message);
      if (resp.status === 200) {
        // nothing do
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // filter api
  const filterApi = (props) => {
    const filterApi = apis.filter((elem, index) => {
      return elem._id !== props;
    });
    setApis(filterApi);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <div className="container mt-4 ">
        <div className="title text-center">
          <h2>Welcome to the Api World</h2>
        </div>

        <div className="api  d-flex justify-content-center flex-wrap">
          {apis &&
            apis.map((elem, index) => {
              return <ApiCard key={index} api={elem} filterApi={filterApi} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
