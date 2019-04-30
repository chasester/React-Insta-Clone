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
        this.setState({value: ''});
        if(this.props.resetCb) this.props.resetCb()
    }
    handleChange(event) 
    {
        this.setState({value: event.target.value});
        event.preventDefault();  
        if(this.props.changeCb) this.props.changeCb()
    }

    handleSumbit(event)
    {
        event.preventDefault();
        if(this.props.submitCb) this.props.submitCb()
    }
    render()
    {
        return(
            <div className="search-bar" onSubmit={this.handleSumbit} id="noselect">
                   <input type="text" autoComplete="off" placeholder={this.props.placeholder} className="fa fa-input" id="search-bar" value={this.state.value} onChange={this.handleChange}/>
                   <input type="button" value={"\uf057"} className="search-clear fa" style={this.state.value === "" ? {opacity: "0"} : {opacity: "1"} } onClick={this.handleReset}/>
            </div>
        )
    }
}

//props
//placeholder = "&#xf002; Search";
//changeCb
//submitCb
//resetCb

export default SearchBar;