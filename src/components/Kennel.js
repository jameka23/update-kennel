import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap'
import './Kennel.css'
import AnimalCard from '../components/animal/AnimalCard'

class Kennel extends Component{

    styles = {
        marginLeft: '43%',
        marginBottom: '5%',
        marginTop: '5%'
    }

    render(){
        return (
            <div>
                <h1 style={this.styles}>Nashville Kennels</h1>
                <section className="main-container">
                    <Card className="cardKennels">
                        <CardBody>
                            <CardTitle>Camp Bow Wow</CardTitle>
                            <CardText>
                                <address>470 Craighead St. Nashville
                                    <br/>TN 37204</address>
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className="cardKennels">
                        <CardBody> 
                            <CardTitle>Peace Love and Paws</CardTitle>
                            <CardText>
                                <address>1221 Brick Church Pike 
                                    <br/>Nashville, TN 37207</address>
                            </CardText>
                        </CardBody>
                    </Card>
                </section>
                <section>
                    <AnimalCard />
                    <AnimalCard />
                    <AnimalCard />
                </section>
            </div>
        )
    }
}

export default Kennel