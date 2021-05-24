import React from 'react';
import Tour, { ITour } from './Tour';

interface IProps {
    tours: Array<ITour>
}

export default function Tours(props: IProps) {
    return (
        <div style={{width: "100%", height: "100%", paddingLeft: "20%", paddingRight: "20%", marginTop: "20px"}}>
            {props.tours.map(_tour => {
                return <Tour tour={_tour}/>
            })}
        </div>
    )
}
