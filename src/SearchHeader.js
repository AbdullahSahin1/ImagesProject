import {useState} from "react"
function SearchHeader({search}) {
    const [value, setValue] = useState('');
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        search("can")
    }
    return ( 
        <div className="SearchDiv">
            <form onSubmit = {handleFormSubmit}>
                <label>Ne arıyorsunuz</label>
                <input/>
            </form>
        </div>
     );
}

export default SearchHeader;
