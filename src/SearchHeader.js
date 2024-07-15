function SearchHeader({search}) {
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
