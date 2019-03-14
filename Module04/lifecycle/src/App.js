import React, { Component, Fragment } from "react";
import Counter from "./Counter";
import { addLifecycleToViewer, clearViewer } from "./LifecycleViewer";

export default class App extends Component {
  state = {
    step: 1,
    mounted: false
  };

  incrementStep = () => {
    addLifecycleToViewer("Updating Props", "primary");

    this.setState(state => ({ step: state.step + 1 }));
  };

  toggleMounted = () => {
    const message = this.state.mounted ? "Unmounting" : "Mounting";
    addLifecycleToViewer(message, "primary");

    this.setState(state => ({ mounted: !state.mounted }));
  };

  render() {
    const { mounted, step } = this.state;

    return (
      <div>
        {mounted && (
          <Fragment>
            <Counter step={step} />
            <hr />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.incrementStep}
            >
              Update External Props (Increment STEP)
            </button>
            <hr />
          </Fragment>
        )}
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.toggleMounted}
        >
          {mounted ? "Unmount" : "Mount"}
        </button>
        {mounted && (
          <Fragment>
            <hr />
            <button
              type="button"
              className="btn btn-primary"
              onClick={clearViewer}
            >
              Clear Viewer
            </button>
          </Fragment>
        )}
      </div>
    );
  }
}
