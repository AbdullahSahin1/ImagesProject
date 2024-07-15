import {useState} from "react"
function SearchHeader({search}) {
    const [valueInput, setValue] = useState('');
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        search(valueInput)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return ( 
        <div className="SearchDiv">
            <form onSubmit = {handleFormSubmit}>
                <label>Ne arıyorsunuz</label>
                <input value={valueInput} onChange={handleChange}/>
            </form>
        </div>
     );
}

export default SearchHeader;
