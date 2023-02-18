import React from "react";
import { useState } from "react";
import { logInUser, users } from "./data";





 export function handleVoteSubmit(users){
    const [onVoted, setOnVoted] = useState(0)
    const history = useHistory();
    const user = users.find(u => u.type === type);


    if(user && user.type === 'admin'){
        history.push('/adminPage')
    }else{
        history.push('/userPage')
    }
}