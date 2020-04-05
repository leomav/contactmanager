import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ title: data.title, body: data.body });
      });
  }

  // When component receives new props, this will run
  // Used: with Redux
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("Component will receive new Props...");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
