import {useState} from "react"
function SearchHeader({search}) {
    const [valueInput, setValue] = useState('');
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        search("can")
    }
    return ( 
        <div className="SearchDiv">
            <form onSubmit = {handleFormSubmit}>
                <label>Ne arıyorsunuz</label>
                <input value={valueInput}/>
            </form>
        </div>
     );
}

export default SearchHeader;
