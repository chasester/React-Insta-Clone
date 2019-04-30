import React from 'react';

class UserInputForm extends React.Component
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
        if(this.props.submitCb) this.props.submitCb(this.state.value);
        if(this.props.clearOnSubmit)this.setState({value: ''});
    }
    render()
    {
        return(
            <div className="search-bar"  id="noselect">
                <form onSubmit={this.handleSumbit}>
                   <input type="text" autoComplete="off" placeholder={this.props.placeholder} size={this.props.size > 0 ? this.props.size : 15} className="fa fa-input input-field" id="search-bar" value={this.state.value} onChange={this.handleChange}/>
                   <input type="button" value={"\uf057"}   className="search-clear fa" style={this.state.value === "" ? {opacity: "0"} : {opacity: "1"} } onClick={this.handleReset}/>
                </form>
            </div>
        )
    }
}

//props
//placeholder = "&#xf002; Search";
//changeCb
//submitCb
//resetCb

export default UserInputForm;