
import { useEffect, useState, filterChange, useDispatch } from "react";

const Filter = () => {
    const [filter, setFilter] = useState('all');
    
    const handleChange = (event) => {
        setFilter(event.target.value);
    };
    
    
    const style = {
        marginBottom: 10,
    };
    
    return (
        <div style={style}>
            fitler <input value={filter} onChange={handleChange} />
        </div>
    );
}

export default Filter;