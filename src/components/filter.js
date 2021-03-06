import React from 'react';

const Filter = (props) => {
    return(
        <div className="filter">
            <span className="label">Filter By:</span>
            <select className="filterBy categoryDropdown" value={props.filter} onChange={props.handleFilter} >
                <option value={null}>None</option>
                <option value="full">Full</option>
                <option value="partial">Partial</option>
                <option value="ebooks">eBooks</option>
                <option value="free-ebooks">Free eBooks</option>
                <option value="paid-ebooks">Paid eBooks</option>
            </select>
            <select
                className="filterBy LanguageDropdown"
                value={props.languageRestriction}
                onChange={props.handleLanguageRes}
            >
                <option value={null}>All</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
                <option value="ru">Russian</option>
            </select>
        </div>
    );
};

export default Filter;