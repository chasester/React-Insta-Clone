

function onewayhash(username, password)
{
    return (username + password).split("").map((x,i)=> (Math.pow(x.charCodeAt(0),1*(0.01*(i+1))) % Math.pow(2,10)).toString(16).split(".").join("")).join("");
}

export default onewayhash;