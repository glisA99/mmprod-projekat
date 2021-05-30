import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Grid, Segment, Image } from 'semantic-ui-react';

export type ImagePath = string;

export interface ITour {
    title:string,
    image: ImagePath,
    price: string,
    duration: string,
    description: string,
    included: string,
    additionalInfo: string,
    id: number,
    videoID: string,
    placeholderImagePath: string
}

interface IProps {
    tour: ITour
}

const Tour = withRouter((props: RouteComponentProps & IProps) => {

    const handleClick = (e:any) => {
        props.history.push(`/tours/${props.tour.id}`);
    }

    return (
        <Segment raised className='tourSegment' onClick={handleClick}>
            <Grid stretched style={{width: "100%", height: "100%"}} className='tourGrid' columns='16'>
                <Grid.Row stretched className='tourRow'>
                    <Grid.Column width='6'>
                        <Image src={`${props.tour.image}`} className="tourImage" />
                    </Grid.Column>
                    <Grid.Column width='8'>
                        <p className='titleTour'>{props.tour.title}</p>
                        <p>{props.tour.description}</p>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle' width='2'>
                        <p style={{fontSize: "20px"}}><b>Cena:<br></br>{props.tour.price}RSD</b></p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )

})

export default Tour;