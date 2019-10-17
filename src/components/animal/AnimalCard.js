import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardImg
} from 'reactstrap'

class AnimalCard extends Component{
    render(){
        return(
            <React.Fragment>
                <Card>
                    <CardImg src={'./dog.svg'}/>
                </Card>
            </React.Fragment>
        )
    }
}

export default AnimalCard