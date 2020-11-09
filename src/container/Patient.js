import React from 'react';
import '../assets/css/patient.css';
import {useDispatch, useSelector} from "react-redux";
import {setUserState} from "../store/action";

export const Patient = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onChange = (e) =>{
        dispatch(setUserState({
            [e.target.name]:e.target.value
        }))
    };

    return(
        <div className={'patient-app-box'}>
            <div className={'patient-app-box-item'}>
                <h2>What is your age?</h2>
                <p>{user.age}</p>
                <input onChange={(e)=>{onChange(e)}} name={'age'} type="range" min="1" max="100" value={user.age}
                       className="slider" id="myRange"/>
            </div>
            <div className={'patient-app-box-item'}>

                <h2>What is your sex?</h2>

                <div className={'app-box-item-elem'}>
                    <label className={'container'}>
                        Male
                        <input onChange={(e)=>{onChange(e)}} name={'gender'} type={'checkbox'} checked={user.gender==='Male'}  id={'male'}
                               value={'Male'}/>
                        <span className={'checkmark'}/>
                    </label>
                </div>
                <div className={'app-box-item-elem'}>
                    <label className={'container'}>
                        Female
                        <input onChange={(e)=>{onChange(e)}} name={'gender'} type={'checkbox'} checked={user.gender==='Female'}
                               id={'female'} value={'Female'}/>
                        <span className={'checkmark'}/>
                    </label>
                </div>
            </div>
        </div>
    )
}
