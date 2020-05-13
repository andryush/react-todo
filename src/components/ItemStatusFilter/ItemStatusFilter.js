import React, {Component} from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        {filterName: 'all', label: 'All'},
        {filterName: 'active', label: 'Active'},
        {filterName: 'done', label: 'Done'}
    ]


    render() {
        const {filter, onFilter} = this.props;
        const buttons = this.buttons.map((el) => {
            const isActive = filter === el.filterName;
            const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';
            return(
                <button 
                    type="button" 
                    className={`btn ${btnClass}`}
                    key={el.filterName}
                    onClick={() => onFilter(el.filterName)}
                >
                    {el.label}
                </button>
            )
        })    
        return(
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
