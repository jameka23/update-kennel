import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardImg
} from 'reactstrap'
import '../Kennel.css'

class AnimalCard extends Component{
    render(){
        return(
            <React.Fragment>
                <Card className="cCard">
                    <CardImg className='dogImg' src={require('./dog.svg')} alt="dog"/>
                    <CardBody className="cBody">
                        <CardTitle>Name:<span className="card-petname">Doodles</span></CardTitle>
                        <CardText>Breed: Poodle</CardText>
                    </CardBody>
                </Card>
            </React.Fragment>
        )
    }
}

export default AnimalCard