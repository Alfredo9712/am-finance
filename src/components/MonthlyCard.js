import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
// import { data } from "./data";

const MonthlyCard = () => {
  const monthExpenses = useSelector((state) => state.monthExpenses);
  const { data } = monthExpenses;

  const theme = {
    textColor: "#ffffff",
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555",
        },
        text: {
          fill: "#ffffff",
        },
      },
      legend: {
        text: {
          fill: "#ffffff",
        },
      },
    },
    grid: {
      line: {
        stroke: "#555555",
      },
    },
  };

  return (
    <div
      style={{
        height: 277,
        marginLeft: "auto",
        marginLeft: "auto",
        marginTop: "0px",
        color: "black",
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          paddingTop: "5%",
          marginBottom: "0",
        }}
      >
        {" "}
        Expense history
      </h1>

      {data.length === 0 ? (
        <h5
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: "36%",
            marginBottom: "0",
          }}
        >
          {" "}
          Past months spending will show here
        </h5>
      ) : (
        <>
          <div style={{ marginTop: "6%", height: 277 }}>
            <ResponsiveBar
              data={data}
              keys={["amount"]}
              indexBy="month"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "nivo" }}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Month",
                legendPosition: "middle",
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Amount",
                legendPosition: "middle",
                legendOffset: -55,
              }}
              theme={theme}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MonthlyCard;
