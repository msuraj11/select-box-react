import React, { Component } from "react";
import "../styles/App.css";
import { connect } from "react-redux";
import urls from "../jsonFiles/urls.json";
import * as selectAction from "../actions/selectAction";
import { Child } from "../components/Child";
// import XMLViewer from 'react-xml-viewer';
// import xmlFile from '../jsonFiles/sample.xml';
var _ = require("lodash");

class App extends Component {
  handleChange = event => {
    this.props.action(event.target.value);
  };

  render() {
    return (
      <div>
        <div className="App">
          <h3 className="display-4">Please Choose an option</h3>
          <select
            name="role"
            className="selectbox"
            onChange={this.handleChange}
          >
            {_.map(urls, (item, i) => {
              return (
                <option key={i} value={item}>
                  {" "}
                  {i}{" "}
                </option>
              );
            })}
          </select>

          <br />
          <br />
        </div>
        <Child data={this.props.urlData} loading={this.props.loading} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    urlData: state.urlData.repo_data,
    loading: state.urlData.loading
  };
};

const mapDispatchToProps = {
  action: selectAction.apiData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
