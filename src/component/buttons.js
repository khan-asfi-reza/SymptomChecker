import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useSelector} from "react-redux";
export const Buttons = ({current, forward, backward}) =>{

    const state = useSelector(state => state.user);

    const buttonDisabled = () =>{
        switch (current) {
            case 0:
                return !state.agreement;
            case 1:
                return state.gender===null || state.age===null;

            default:
                return false
        }
    };

    return(
        <div className={'button-box'}>

            <button disabled={current===0} onClick={backward}  className={'home-next-button button'}>
                <ArrowBackIcon style={{fontSize: '.8rem'}}/>Back
            </button>

            <button onClick={forward} disabled={buttonDisabled()}  className={`home-back-button button`}>
                {current === 3 ? "Retry":'Next'}<ArrowForwardIcon style={{fontSize: '.8rem'}}/>
            </button>

        </div>
    )
};