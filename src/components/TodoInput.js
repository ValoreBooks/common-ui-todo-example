import React from "react";

import { Button, Input, Container, Row, Col } from "@follett/common-ui";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  handleKeyPress = e => {
    const key = e.key;
    const value = e.target.value;
    this.setState({
      todo: value
    });

    if (key === "Enter") {
      this.props.onTodoItemAdded(value);
      this.setState({
        todo: ""
      });
    }
  };

  handleAddButtonClick = () => {
    this.props.onTodoItemAdded(this.state.todo);
  };

  render() {
    return (
      <div class="d-flex flex-row bd-highlight mb-3">
        <Input
          type="text"
          onKeyPress={this.handleKeyPress}
        />
        <Button
          color="primary"
          className="ml-3"
          onClick={this.handleAddButtonClick}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default TodoInput;
