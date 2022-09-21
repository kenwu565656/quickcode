import React from "react";
import { Bar, Line }from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Stat.css";
import {bardata1, bardata2, linedata} from "./data";

const Stat = () => {

    const options = {
        scales: {
            yAxes: [{
                display: true,
                stacked: true,
                ticks: {
                    min: 0, // minimum value
                    max: 10 // maximum value
                }
            }]
        }
    };

    const last_days_list = () => {
        let mylist = [];
        var myday;
        for(var i = 0; i < 30; i++){
          myday = new Date(i);
          mylist.push(myday.toISOString().substring(0, 10))
        }
        return mylist;
      }
    console.log(last_days_list);

    const numberBox_content = [{title: "Total Posts", number: "93" }, {title: "Total Programming Posts", number: "76"}, {title: "Non-Programming Post", number: "17"}];
    return(
        <div className="dashboard">

        <div className='chartRow'>
          <h3 className="dashboard_title">Statistics Dashboard</h3>
          <div className="number_box_container">
        {
          numberBox_content.map((item, index) => {
            return(
              <div className='numberBox' key={index}>
               <h3>{item.title}</h3>
               <p className='number'>{item.number}</p>
              </div>
            )
          })
        }
        </div>
        </div>

        <div className="chartRow2">
            <div>
            <Bar data={bardata1} />
            </div>
            <div>
            <Bar data={bardata2} />
            </div>
            
            
        </div>

        <div className="white_background">
            <Line data={linedata} height={"40vh"} options={options} className={"line_chart"}/>
        </div>
        </div>
    )
};

export default Stat;