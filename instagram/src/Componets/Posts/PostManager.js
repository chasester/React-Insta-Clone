import React from 'react';
import './Post.css';
import Post from './Post';
import NavBar from '../Nav-Bar/NavBar';
import dummyData from '../../dummy-data'

class PostManager extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {data: dummyData};
        this.data = this.state.data;
    }
    
    render()
    {
        return(
            <div><NavBar searchCb={(str) => this.filterSearch(str)} />
                <div className="post-content main-content">

                    {
                        this.data.map( (x,i) => <Post data={x} key={`post:${i}`} index={i} likedcb={(add,user,id) => this.handleLike(add,user,id)}commentcb={(s,u) => this.handleComment(s,u,i)}/>)
                    }
                </div>
            </div>
        );
    }

    filterSearch(str)
    {
        this.data = this.state.data;
        
        if(str !== "") this.data = this.data.filter(x=> x.username.toUpperCase().includes(str.toUpperCase()))
        this.setState(this.state);
    }
    handleLike(add, user, id)
    {
        try
        {
            let arry = this.state.data;
            arry[id].likes += add ? 1 : -1;
            this.setState({data : arry})
            floaters[id].launch(add);
            //later use user to connect to the database and add them to the liked list (or remove them if they are already added) this will prevent a hack that will allow users to infinately like by hacking
        }
        catch (err) 
        {
            console.log(err);
        }
    }
    handleComment(str, user, id)
    {
        try
        {
            let arry = this.state.data;
            let len = arry[id].comments.length;
            id= parseInt(id); str.toString(); user.toString();
            arry[id].comments.push({id: len, username: user, text: str});
            this.setState({data : arry});
        }
        catch (err) 
        {
            console.log(err);
        }
    }
    componentDidMount()
    {
        floaters = [...document.querySelectorAll(".floater-container")].map(x=> new FloatContainer(x));
    }
    componentDidUpdate()
    {
        floaters = [...document.querySelectorAll(".floater-container")].map(x=> new FloatContainer(x));
    }
}

export default PostManager;


class FloatContainer
{
    constructor(element)
    {
        this.data = element.dataset.floatid;
        this.element = element;
        this.child = new Floater(document.querySelector(`#floater[data-floatid = '${this.data}']`), this.element);
        
    }
    launch(liked)
    {
        if(liked)this.child.launch();
        else this.child.pop();
    }
}

class Floater
{
    constructor(element, parent)
    {
        this.parent = parent;
        this.element = element;
        this.element.classList.add("floater-attach");
        this.interval = null;
        this.incr = 0;
    }

    launch()
    {
        if(this.interval){ window.clearInterval(this.interval); this.interval = null}
        this.element.style.left = this.parent.offsetLeft.toString() + "px";
        this.element.style.top = this.parent.offsetTop.toString() + "px";
        this.element.style.display = "inline";
        this.interval = window.setInterval(()=> this.update(), 22);
    }

    update()
    {
        this.incr++;
        let left = this.incr %74 < 37 ? 1 : -1;
        this.element.style.top = (parseFloat(this.element.style.top) - 7).toString() + "px";
        this.element.style.left = (parseFloat(this.element.style.left) + left).toString() + "px";
        if(this.element.offsetTop < (window.pageYOffset-10)){ this.pop()}
    }
    pop()
    {
        this.element.style.display = "none";
        if(this.interval){ window.clearInterval(this.interval); this.interval = null}
    }
}

var floaters = [];