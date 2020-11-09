import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserState} from "../store/action";

export const Welcome = () =>{

    const dispatch = useDispatch();
    const {agreement} = useSelector(state => state.user);

    const onChange = () =>{
        if(agreement){
            dispatch(setUserState({agreement:false}))
        }else{
            dispatch(setUserState({agreement:true}))
        }
    };

    return(
        <div className={'home'}>
            <h1 style={{marginBottom: '1.5rem'}}>Welcome To Symptom Checker</h1>

            <br/>
            <p>- This checkup is not a diagnosis.</p>
            <br/>
            <p>- This checkup is for informational purposes and is not a qualified medical opinion.</p>
            <br/>
            <p>- Information that you provide is anonymous and not shared with anyone.<br/> We also do not store any
                information on our server.</p>
            <br/>
            <br/>
            <label className={'container'}>
                I agree to the  terms and conditions
                <input checked={agreement} onChange={onChange} type={'checkbox'}
                       id={'home-check-box'}/>
                <span className={'checkmark'}/>
            </label>
        </div>
    )

};