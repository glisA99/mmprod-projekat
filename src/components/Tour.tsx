import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react';

export type ImagePath = string;

export interface ITour {
    title:string,
    image: ImagePath,
    price: string,
    duration: string,
    description: string
}

interface IProps {
    tour: ITour
}

const Tour = (props: IProps) => {

    return (
        <Segment raised className='tourSegment'>
            <Grid stretched style={{width: "100%", height: "100%"}} className='tourGrid' columns='16'>
                <Grid.Row stretched className='tourRow'>
                    <Grid.Column width='6'>
                        <Image src={`${props.tour.image}`} className="tourImage" />
                    </Grid.Column>
                    <Grid.Column width='8'>
                        tekst
                    </Grid.Column>
                    <Grid.Column width='2'>
                        <p>Cena:<br></br>{props.tour.price}RSD</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )

}

export default Tour;