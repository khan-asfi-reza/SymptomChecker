import React from "react";
import CheckIcon from '@material-ui/icons/Check';
export const Steps = ({containers, current}) =>{

    return(
        <div style={{display:'flex'}} className={'nav-box'}>
            {containers.map((e,id)=>
                <div key={id} style={{display:'flex'}}>
                    <li style={{cursor: 'pointer'}}
                        className={'home-nav'}>
                        <div className={'nav-item'}>
                            <div className={'icon-div'}>{e.id-1<current || current+1===containers.length?<CheckIcon className={'check-icon'} style={{color: 'white!important'}}/>:e.id}</div>
                            <p>{e.name}</p>
                        </div>
                    </li>
                    {e.id!==containers.length?
                        <li className={'line-li'}>
                            <div className={'nav-item nav-line'}/>
                        </li>
                        :
                        null
                    }
                </div>
            )}


        </div>
    )
};

export const Navbar = ({containers,current}) =>{
    return(
        <nav>
            <div className={'navbar'}>
                <ul className={'navbar-nav'}>
                    <a style={{ color:'#244e70',textDecoration:"none",display:'flex',alignItems:'center',}} href={'https://dhilab.com/'} className={'logo-box'}>
                        Symptom Checker
                    </a>
                    <Steps containers={containers} current={current}/>
                </ul>
            </div>
        </nav>
    )
};