import React from "react";
import "./TodoList.css";
import ListItem from "../ListItem/ListItem";

const TodoList = ({ todoData, onDeleteList, onDone, onImportant }) => {
  return (
    <ul className="list-group TodoList">
      {todoData.map((el) => {
        return (
          <li className="list-group-item" key={el.id}>
            <ListItem
              todoDataLabel={el.label}
              important={el.important}
              done={el.done}
              onDeleteListItem={() => onDeleteList(el.id)}
              onImportant={() => onImportant(el.id)}
              onDone={() => onDone(el.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
