import React, { Component } from "react";
import { addLifecycleToViewer } from "./LifecycleViewer";

export default class Counter extends Component {
  constructor() {
    super();
    addLifecycleToViewer("constructor()", "info");
    this.state = { value: 0 };
  }

  static getDerivedStateFromProps(props) {
    addLifecycleToViewer("getDerivedStateFromProps()", "warning");
    return null;
  }

  componentDidMount() {
    addLifecycleToViewer("componentDidMount()", "warning");
  }

  shouldComponentUpdate(prevProps, prevState) {
    const shouldUpdate =
      prevProps.step !== this.props.step ||
      prevState.value !== this.state.value;

    addLifecycleToViewer(`shouldComponentUpdate() - ${shouldUpdate}`, "info");
    return shouldUpdate;
  }

  getSnapshotBeforeUpdate() {
    addLifecycleToViewer("getSnapshotBeforeUpdate()", "warning");

    return null;
  }

  componentDidUpdate() {
    addLifecycleToViewer("componentDidUpdate()", "warning");
  }

  componentWillUnmount() {
    addLifecycleToViewer("componentWillUnmount()", "danger");
  }

  update = () => {
    addLifecycleToViewer("Updating State", "primary");

    this.setState((state, props) => ({
      value: state.value + props.step
    }));
  };

  render() {
    addLifecycleToViewer("render()", "success");

    return (
      <div>
        <h3>Counter Component</h3>
        <p style={{ fontSize: 20, fontWeight: 500, marginBottom: 0 }}>
          this.state.value: {this.state.value}
        </p>
        <p style={{ fontSize: 20, fontWeight: 500, marginBottom: 0 }}>
          this.props.step: {this.props.step}
        </p>
        <hr />
        <button className="btn btn-success" onClick={this.update}>
          Update Internal State (Update VALUE)
        </button>
      </div>
    );
  }
}
