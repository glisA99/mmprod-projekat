import React from 'react'
import { Accordion } from 'semantic-ui-react'

interface IProps {
    description: string,
    included: string,
    additionalInfo: string
}

export default function TourInformations(props: IProps) {

    const panels = [{
        key: "1",
        title: "Opis ture",
        content: props.description
    }, {
        key: "2",
        title: "Sta je sve ukljuceno",
        content: props.included
    }, {
        key: "3",
        title: "Dodatne informacije",
        content: props.additionalInfo
    }]

    return (
        <div style={{width: "100%", height: "100%"}}>
            <Accordion 
                styled 
                exclusive={false}
                panels={panels}
                fluid
                defaultActiveIndex={[0]}
            > 
            </Accordion>
        </div>
    )
}
