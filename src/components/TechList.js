import React, { Component } from "react";

export default class components extends Component {
  state = {
    newTech: "",
    techs: ["NodeJS", "ReactJS", "React Native"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.techs.indexOf(this.state.newTech) < 0 &&
      this.state.newTech !== ""
    ) {
      this.setState({
        techs: [...this.state.techs, this.state.newTech],
        newTech: ""
      });
    }
  };

  handleRemove = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Class Component</h3>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button type="button" onClick={() => this.handleRemove(tech)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Dale!</button>
      </form>
    );
  }
}
