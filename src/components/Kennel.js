import React, { Component } from 'react'
import './Kennel.css'

class Kennel extends Component{
    render(){
        return (
            <div>
                <h1>Nashville Kennels</h1>
                <section>
                    <div>
                        <h3>Camp Bow Wow</h3>
                        <address>470 Craighead St. Nashville, TN 37204</address>
                    </div>
                    <div>
                        <h3>Peace Love and Paws</h3>
                        <address>1221 Brick Church Pike, Nashville, TN 37207</address>
                    </div>
                </section>
            </div>
        )
    }
}

export default Kennel