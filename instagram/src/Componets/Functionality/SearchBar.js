import React from 'react';

class SearchBar extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleReset(event){
        event.preventDefault();
        console.log("hello");
        this.setState({value: ''});
    }
    handleChange(event) 
    {
        //alert('A name was submitted: ' + this.state.value);
        this.setState({value: event.target.value});
       
    }

    handleSumbit(event)
    {
        event.preventDefault();
    }
    render()
    {
        return(
            <div className="search-bar" onSubmit={this.handleSumbit} id="noselect">
                <form>
                   <input type="text" placeholder="&#xf002; Search" name={`search`} className="fa fa-input" id="search-bar" value={this.state.value} onChange={this.handleChange}/>
                   <input type="button" value="x" className="search-clear" style={this.state.value === "" ? {opacity: "0"} : {opacity: "1"} } onClick={this.handleReset}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;