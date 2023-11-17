import { useState } from "react"
import './user.css'

const User = ({name, symbol}) =>{
    const [edit, setEdit] = useState(true);
    const [UserName, setUserName] = useState(name);


    const change = () =>{
        setEdit((edit)=> !edit);
    }

    let PlayerName = <span>{UserName}</span>;

    const type = (e) =>{
        setUserName(e.target.value);
    }

    if(!edit){
        PlayerName = <input id="inp_text" type="text" required value={UserName} onChange={type}/>;
    }

    return(
        <div id="cnt">
        <span id="name">{PlayerName}</span>
            <p id="player">{symbol}</p>
            <button id="edit" onClick={change}>{edit ? 'edit' : 'save'}</button>
        </div>
    )
}
export default User;