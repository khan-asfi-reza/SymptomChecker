import React from "react";
import '../assets/css/disease.css';
import {useSelector} from "react-redux";
import InfoIcon from '@material-ui/icons/Info';

export const Disease = () => {

    const {disease_with_possibility, gender, age} = useSelector(state => state.user);

    const filtered_list = disease_with_possibility.filter(e => {
        return e.possibility > 0;
    });
    filtered_list.sort((a, b) =>
        -a.possibility.localeCompare(b.possibility, undefined, {numeric: true})
        ||
        a.name.localeCompare(b.name)
    );
    return(
        <div>
            {filtered_list.length !== 0 ?
            <div className={'disease-app'}>
                <div>
                    <div className={'patient-info'}>
                        <p className={'question'}>Patient gender -  <span
                            className={'patient-gender'}>{gender}</span></p>
                        <p className={'question'}>Patient age - <span className={'patient-age'}>{age} </span></p>

                    </div>
                    <div className={'top-bar'}>
                        <h3>Diagnosis Report</h3>
                        <div className={'symptoms-patient-has'}><h3>Symptoms Patient Has</h3></div>

                    </div>
                </div>
                {filtered_list.map((key, id) => {
                    return <div key={id} className={'disease-box'}>
                        <div className={'name-possibility-box'}>
                            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                                <h3 className={'disease-name'} style={{fontSize: '20px'}}>{key.name}</h3>
                                <a style={{color:'black'}} title={'wikipedia'} rel="noopener noreferrer" target={'_blank'} href={`https://en.wikipedia.org/wiki/${key.name}`} className={'info-icon'}><InfoIcon/></a>
                            </div>
                            <div className={'bar'}>
                                <span>Possibility</span>
                                <div className={'possibility-bar'} style={{width: '7rem', display: 'block'}}>
                                    <p>{key.possibility}%</p>
                                    <div className={'possibility'}
                                         style={{backgroundColor: '#194970;', width: `${key.possibility}%`}}/>
                                </div>
                            </div>
                        </div>
                        <div className={'symptom-name-box'}>

                            <div className={'disease-symptom-box'}>
                                <h4 style={{marginBottom:'1rem'}}>Disease Symptoms</h4>
                                {key.disease_symptom.sort().map((item, index) => {
                                    return key.symptom_user_has.includes(item) ?
                                        <div style={{backgroundColor: '#153f70', color: 'white', textAlign:'center'}} key={index}
                                             className={'disease-symptoms'}><span> {item} </span></div> :
                                        <div key={index} style={{textAlign:'left'}} className={'disease-symptoms'}><span> {item} </span></div>

                                })}
                            </div>

                        </div>

                    </div>
                })}
                <p className={'cannot-determine-box'}>
                    Always visit a doctor if you have any symptoms of a disease or call your local hospital
                </p>
            </div> :
            <div>
                <div className={'patient-info'}>
                    <h3 className={'question'}>Patient gender - <span
                        className={'patient-gender'}>{this.props.gender}</span></h3>
                    <h3 className={'question'}>Patient age - <span className={'patient-age'}>{this.props.age} </span></h3>
                </div>
                <p className={'cannot-determine-box box-2'}>
                    Cannot determine possible diseases due to lack of symptoms. Please retry the analysis with actual
                    symptoms or call your local hospital if it is an emergency.
                </p>
            </div>}
        </div>
    )
}