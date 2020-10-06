import { Component } from "react";
import Button from "./button";

export default class ButtonExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }

  onClick = () => {
    this.setState({ loading: true, status: !this.state.status }, () =>
      setTimeout(() => this.setState({ loading: false }), 1500)
    );
  };

  render() {
    return (
      <Button
        icon={`fa fa-star${this.state.status ? "" : "-o"}`}
        color="primary"
        loading={this.state.loading}
        outline={!this.state.status}
        onClick={this.onClick}
      >
        {this.state.status ? "Subscribe" : "Unsubscribe"}
      </Button>
    );
  }
}
