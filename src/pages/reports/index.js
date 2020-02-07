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
    const { data } = await getReportInfecteds();

    this.setState({
      infecteds: data.report
    });
  }

  async loadReportNonInfecteds() {
    const { data } = await getReportNonInfecteds();

    this.setState({
      nonInfecteds: data.report
    });
  }

  async loadReportInfectedPoints() {
    const { data } = await getReportInfectedPoints();

    this.setState({
      infectedPoints: data.report
    });
  }

  async loadReportPeopleInventory() {
    const { data } = await getReportPeopleInventory();

    this.setState({
      peopleInventory: data.report
    });
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
              chartData.map((_entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
        <div className="TextReports">
          <h4>
            {infectedPoints.description}
          </h4>

          <label>
            {infectedPoints.total_points_lost}
          </label>
        </div>
        <div className="TextReports">
          <h4>
            {peopleInventory.description}
          </h4>

          <label>
            Total: {peopleInventory.average_items_quantity_per_person}
          </label>

          <label>
            Non-infected: {peopleInventory.average_items_quantity_per_healthy_person}
          </label>
        </div>
      </>
    );
  }
}
