import React, { Component } from 'react';
import './styles.css';
import {
  getReportInfecteds,
  getReportNonInfecteds,
  getReportInfectedPoints,
  getReportPeopleInventory
} from '../../model/survivor';
import {
  PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';
import { StatusCode } from '../../services/httpService';

export default class Reports extends Component {
  state = {
    infecteds: {},
    nonInfecteds: {},
    infectedPoints: {},
    peopleInventory: {}
  }

  componentDidMount() {
    this.loadReportInfecteds();
    this.loadReportNonInfecteds();
    this.loadReportInfectedPoints();
    this.loadReportPeopleInventory();
  }

  async loadReportInfecteds() {
    const response = await getReportInfecteds();

    this.setReportState(response, 'infecteds');
  }

  async loadReportNonInfecteds() {
    const response = await getReportNonInfecteds();

    this.setReportState(response, 'nonInfecteds');
  }

  async loadReportInfectedPoints() {
    const response = await getReportInfectedPoints();

    this.setReportState(response, 'infectedPoints');
  }

  async loadReportPeopleInventory() {
    const response = await getReportPeopleInventory();

    this.setReportState(response, 'peopleInventory');
  }

  setReportState(response, report) {
    if (response.status === StatusCode.OK_STATUS) {
      this.setState({
        [report]: response.data.report
      });
    }
    else {
      alert('Failed to load all reports');
    }
  }

  render() {
    const { infecteds, nonInfecteds, infectedPoints, peopleInventory } = this.state;
    const chartData = [
      { name: infecteds.description, value: infecteds.average_infected },
      { name: nonInfecteds.description, value: nonInfecteds.average_healthy }
    ];
    const COLORS = ['red', 'slateblue'];

    return (
      <>
        <PieChart width={350} height={350}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={110}
            paddingAngle={1}
          >
            {
              chartData.map((_entry, index) =>
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              )
            }
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
        <div className="TextReports">
          <h4>
            {infectedPoints.description}
          </h4>

          <label data-id="totalPointsLost">
            {infectedPoints.total_points_lost}
          </label>
        </div>
        <div className="TextReports">
          <h4>
            {peopleInventory.description}
          </h4>

          <label data-id="avgItensPerPerson">
            Total: {peopleInventory.average_items_quantity_per_person}
          </label>

          <label data-id="avgItensPerHealthyPerson">
            Non-infected: {peopleInventory.average_items_quantity_per_healthy_person}
          </label>
        </div>
      </>
    );
  }
}
