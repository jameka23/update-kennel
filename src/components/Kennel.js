import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap'
import './Kennel.css'
import AnimalCard from '../components/animal/AnimalCard'
import LocationCard from './location/LocationCard'

class Kennel extends Component{

    styles = {
        marginLeft: '42%',
        marginBottom: '5%',
        marginTop: '5%'
    }

    render(){
        return (
            <div>
                <h1 style={this.styles}>Nashville Kennels</h1>
                <section className="main-container">
                    <LocationCard  classname="cardKennels"/>
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