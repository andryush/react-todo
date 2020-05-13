import React from 'react';
import './Header.css';

const Header = ({done, todo}) => {
    return(
        <div className="d-flex Header">
            <h1>Todo list</h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
        )
}
export default Header;