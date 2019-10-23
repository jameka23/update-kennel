import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap'
import '../Kennel.css'

export default class LocationCard extends Component {
    render() {
        return (
            <section>
                <Card>
                    <CardBody>
                        <CardTitle>Camp Bow Wow</CardTitle>
                        <CardText>
                            <address>470 Craighead St. Nashville
                        <br />TN 37204</address>
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody> 
                        <CardTitle>Peace Love and Paws</CardTitle>
                        <CardText>
                            <address>1221 Brick Church Pike 
                                <br/>Nashville, TN 37207</address>
                        </CardText>
                        </CardBody>
                    </Card>
            </section>
        )
    }
}