import React, {useEffect, useState} from "react";
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import {SymptomName} from '../assets/data/SymptomName';
import {DiseaseSymptom} from '../assets/data/DiseaseSymptoms'
import {useDispatch, useSelector} from "react-redux";
import {setUserState} from "../store/action";
import '../assets/css/symptom.css'

export const Symptom = () =>{

    const {user_symptoms} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [search ,setSearch] = useState("");

    const getDiseasePossibility = () =>{
        let possible_disease_function = (arr1, arr2) => {
            let empty_array = [];
            for (let i = 0; i < arr1.length; i++) {
                for (let n = 0; n < arr2.length; n++) {
                    if (arr1[i] === arr2[n]) {
                        empty_array = [...empty_array, arr1[i]]
                    }
                }
            }
            return empty_array
        };

        let possible_diseases = [];
        const diseases = {...DiseaseSymptom};
        const _user_symptoms = [...user_symptoms];
        Object.keys(diseases).map(each => {
            let array1 = [...diseases[each]];
            let array2 = [..._user_symptoms];
            let empty_array = possible_disease_function(array1, array2);
            let possbility = ((((empty_array.length) / array1.length) * 100)).toFixed(2);
            let object = {
                name: each,
                possibility: possbility,
                disease_symptom: diseases[each],
                symptom_user_has: empty_array
            };
            return possible_diseases = [...possible_diseases, object]
        });
        dispatch(setUserState({
            disease_with_possibility:possible_diseases
        }))
    };

    useEffect(()=>{
        getDiseasePossibility()
    },[user_symptoms]);

    const addSymptomsEvent = (e) => {
        if(!user_symptoms.includes(e.target.value)){
            const newUserSymptoms = [...user_symptoms, e.target.value];
            dispatch(setUserState({user_symptoms:newUserSymptoms}))
        }
    };

    const deleteSymptomsEvent = (e) => {
        if(user_symptoms.includes(e.target.value)){
            const newUserSymptoms = [...user_symptoms].filter((s) => s !== e.target.value);
            dispatch(setUserState({user_symptoms:newUserSymptoms}))
        }
    };

    const resetSymptom = () => {
        dispatch(setUserState({user_symptoms:[]}))
    };



    const keyDownEvent = (e, symptoms) => {
        const re = new RegExp(e.target.value.split('').join('\\w*').replace(/\W/, ""), 'i');
        const symps = symptoms.filter(each => {
            return (each.match(re))
        });
        if(e.key === 'Enter'){
           symps.match((key)=>{
               if(!user_symptoms.includes(key) && e.target.value.toLowerCase() === key.toLowerCase()){
                   const newUserSymptoms = [...user_symptoms, key];
                   dispatch(setUserState({user_symptoms:newUserSymptoms}))
               }else{
                   const newUserSymptoms = [...user_symptoms, symps[0]];
                   dispatch(setUserState({user_symptoms:newUserSymptoms}))
               }
           })
        }
    };


    return(
        <div className={'symptom-app-box'}>
            <div>
                <div className={'user-symptom-box'}>
                    {user_symptoms.map((key, id) => (
                        <div className={'user-symp'} key={id}>
                            <div className={'align-item-center'}>
                                <div>{key}</div>
                                <button onClick={(e)=>{deleteSymptomsEvent(e)}} key={id} value={key}>
                                    <svg className="MuiSvgIcon-root MuiChip-deleteIcon" focusable="false"
                                         viewBox="0 0 24 24"
                                         aria-hidden="true">
                                        <path
                                            d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>))
                    }
                </div>
                <div className={'symptom-input-container'}>
                    <div className={'button-group'}>
                        <div className={'form-input-search'}>
                            <input onKeyDown={(e)=>{keyDownEvent(e, SymptomName.filter(each => each.toLowerCase().includes(search.toLowerCase())))}} placeholder={'Search Symptoms'} className={'form-input'}
                                  onChange={(e)=>{setSearch(e.target.value)}} type={'text'}/>
                        </div>

                    </div>


                    <div className={'dropdown'}>

                        <div className={`dropdown-menu dropdown-menu-on`}>
                            {SymptomName.filter(each => each.toLowerCase().includes(search.toLowerCase())).filter(item => (!user_symptoms.includes(item))).map((key, id) => {
                                return <button style={{display: 'block'}}
                                               onClick={(e)=>{addSymptomsEvent(e)}}
                                               className={'dropdown-item'} value={key} key={id}>{key}</button>
                            })}
                        </div>

                    </div>
                    <button onClick={resetSymptom} className={'reset-button'}>
                        <SettingsBackupRestoreIcon/> Reset
                    </button>
                </div>

            </div>
        </div>
    )
}