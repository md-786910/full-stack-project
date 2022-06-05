import React from "react";
import Chart from "./Chart";
function Dashboard() {
  return (
    <div>
      <div className="container mt-4">
        <div className="title">
          <h1>Dashboard</h1>
        </div>

        <div
          className="dashboard mx-auto "
          style={{ position: "absolute", left: "35%" }}
        >
          <div className="d-flex p-3 border border-1 border-success border-opacity-25 align-items-center">
            <div
              className="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            ></div>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabindex="0"
              >
                <div>
                  <Chart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
