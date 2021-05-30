import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, Container, Embed, Grid, Input, Message, Segment } from 'semantic-ui-react'
import { ITour } from './Tour';
import TourInformations from './TourInformations';

interface IProps {
    getTour:(id:number) => ITour;
}

const TourPage = withRouter((props: RouteComponentProps & IProps) => {

    const getID = () => (props.match.params as any).id as string;

    const tour = props.getTour(parseInt(getID()));

    return (
        <>
            <Container style={{textAlign: "center"}}>
                <br></br>
                <h1>{tour.title}</h1>
                <Segment >
                    <Embed 
                        id={tour.videoID}
                        source='youtube'
                        placeholder={tour.placeholderImagePath}
                    />
                </Segment>
                <hr></hr>
            </Container>
            <Grid columns='16' style={{height: "400px", marginTop: "20px"}}>
                <Grid.Row stretched textAlign='center' centered>
                    <Message
                        warning
                        header='OBAVESTENJE!'
                        content='Zbog trenutne epidemioloske situacije sve ture su otkazane do daljnjeg.'
                        icon='info circle'
                    />
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width='10' style={{paddingLeft: "8%"}}>
                        <TourInformations description={tour.description} additionalInfo={'dodatne informacije'} included='ukljucene stavke' />
                    </Grid.Column>
                    <Grid.Column width='6' style={{paddingRight: "8%"}}>
                        <Segment raised stacked style={{height: "100%", padding: "8%", textAlign: "center"}} className="cardSegment">
                            <p className='text2'>Pocevsi od: <b>{tour.price}RSD </b> </p>

                            <p className='text2'>Izaberite datum polaska: </p> 
                            <Input type='date'></Input>
                            <p className='text2'>Unesite broj putnika: </p> 
                            <Input type='number' min='0'></Input> <br></br><br></br>
                            <Button disabled primary fluid style={{height: "40px"}} content="Rezervisi" onClick={() => alert('Uspesno ste rezevisali!')}/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
})

export default TourPage;
