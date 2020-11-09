import React, {useRef, useState} from "react";
import {Buttons} from "../component/buttons";
import '../assets/css/index.css';
import {Navbar} from "../component/navbar";
import {Welcome,Patient,Symptom,Disease} from "./";
import {useDispatch} from "react-redux";


export const App = () => {

    const divRef = useRef(null);
    const dispatch = useDispatch();
    const containers = [
        {
            name:'Welcome',
            id:1,
            comp:<Welcome/>
        },
        {
            name:'Patient',
            id:2,
            comp:<Patient/>
        },
        {
            name:'Symptom',
            id:3,
            comp:<Symptom/>
        },
        {
            name:'Disease',
            id:4,
            comp:<Disease/>
        }

    ];

    const setCurrentContainer = (type='forward') =>{
        if(type === "forward"){
            if(current === containers.length - 1){
                dispatch({type:"RESET_USER_STATE"});
                setCurrent(0)

            }else{
                divRef.current.scrollIntoView({behavior:'smooth'});
                setCurrent(current+1)
            }
        }else{
            if(current !== 0){
                setCurrent(current-1)
            }
        }
    };

    const [current, setCurrent] = useState(0);

    return (
        <div className={'root-app'}>
            <div style={{paddingBottom: '2rem'}}>
                <div ref={divRef} style={{height:'0',width:'0'}}/>
                <Navbar current={current} containers={containers}/>
                <br/>
                <div className={'app-box'}>
                    {containers[current].comp}
                </div>
                <Buttons current={current} forward={()=>{setCurrentContainer('forward')}} backward={()=>{setCurrentContainer('backward')}}/>
            </div>
        </div>
    )
};