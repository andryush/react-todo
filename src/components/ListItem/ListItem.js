import React, { Component } from "react";
import "./ListItem.css";

export default class ListItem extends Component {

  render() {
    const { todoDataLabel, onDeleteListItem, onImportant, important, onDone, done } = this.props;

    let classNames = "ListItem";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span 
          className="ListItemLabel"
          onClick={onDone} 
        >
          {todoDataLabel}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleteListItem}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
