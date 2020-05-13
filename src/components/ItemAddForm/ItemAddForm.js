import React, { Component } from 'react';
import './ItemAddForm.css'

export default class ItemAddForm extends Component {

    state = {
        itemsToAdd: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            itemsToAdd: e.target.value
        })
    }

    onSumbitForm = (e) => {
        e.preventDefault();
        if(this.state.itemsToAdd.trim().length !== 0) {
            this.props.onAdd(this.state.itemsToAdd);
            this.setState({
                itemsToAdd: ''
            })
        }
    }

    render() {
        return(
            <form className="ItemAddForm"
                  onSubmit={(event) => this.onSumbitForm(event)}>
                <input 
                    type="text" 
                    className="form-control SearchInput" 
                    placeholder="Enter job name"
                    value={this.state.itemsToAdd} 
                    onChange={this.onChangeHandler}/>
                <button className="btn btn-success">Add</button>
            </form>
        )
    }
}
