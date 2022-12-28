
import { useState, filterChange, useDispatch } from "react";
import SelectSearch from 'react-select-search';


const Filter = () => {
    const options = [
        {name: 'NoReply', value: 'not'},
        {name: 'Joy', value: 'joy'},
    ];


    return (
       <SelectSearch options={options} value="sv" name="tag" placeholder="Choose tags" />
    );
}

export default Filter;