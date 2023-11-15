import { useState } from "react"


const User = ({name, symbol}) =>{
    const [edit, setEdit] = useState(true);
    const [UserName, setUserName] = useState(name);


    const change = (e) =>{
        setEdit((edit)=> !edit);
    }

    let PlayerName = <span>{UserName}</span>;

    const type = (e) =>{
        setUserName(e.target.value);
    }

    if(!edit){
        PlayerName =( <input type="text" required value={UserName} onChange={type}/>);
    }



    return(
        <div>
        <span>{PlayerName}</span>
            <p className="player">{symbol}</p>
            <button onClick={change}>{edit ? 'edit' : 'save'}</button>
        </div>
    )
}
export default User;