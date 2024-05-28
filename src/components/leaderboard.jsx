import React, { useState } from "react";
import "../styles/leaderboard.css";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import data from "../data/data.js";

function Leaderboard() {
  const [tooltipText, setTooltipText] = useState("");

  return (
    <>
      <div className="container">
        <h1 className="leaderboard_header">LeaderBoard</h1>
      </div>
      <Card className="container card_full_body">
        <Card.Body>
          <div className="header_of_box">
            <h2 className="basic_backtest_txt">Basic Backtest</h2>
            <DropdownButton
              title="Slippage"
              id="bg-nested-dropdown"
              variant=""
              className="slipage_button outer_lines"
            >
              <Dropdown.Item eventKey="1">0%</Dropdown.Item>
              <Dropdown.Item eventKey="2">0.5%</Dropdown.Item>
              <Dropdown.Item eventKey="2">1%</Dropdown.Item>
            </DropdownButton>
          </div>
          <table className="table">
            <thead className="thead">
              <tr className="tr">
                <th>Rank</th>
                <th>Name</th>
                <th>Calmar Ratio</th>
                <th>Overall Profit</th>
                <th>Avg. Daily Profit</th>
                <th>Win %(Day)</th>
                <th>Price (Rs)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {data.map((item, index) => (
                <tr key={index} className="tr">
                  <td className="td-rank">{item.Rank}</td>
                  <td>{item.name}</td>
                  <td className={item.calmerratio > 0.5 ? "green" : "red"}>
                    {item.calmerratio > 0.5 ? (
                      <>
                        <i className="fa-solid fa-arrow-trend-up green"></i>{" "}
                        {item.calmerratio}
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-arrow-trend-down red"></i>{" "}
                        {item.calmerratio}
                      </>
                    )}
                  </td>
                  <td>{item.overallprofit}</td>
                  <td>{item.avgprofit}</td>
                  <td>{item.winpercent}</td>
                  <td>{item.price !== "-" ? item.price : "N/A"}</td>
                  <td className="buy_view_box">
                    <div
                      className="tooltip-container"
                      onMouseEnter={() => setTooltipText("View Details")}
                      onMouseLeave={() => setTooltipText("")}
                    >
                      <button
                        type="button"
                        className={
                          item.action === "View"
                            ? "btn btn-outline-primary"
                            : "btn btn-outline-success"
                        }
                      >
                        {item.action}
                      </button>
                      {tooltipText && (
                        <div className="tooltip">{tooltipText}</div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </>
  );
}

export default Leaderboard;
