/**
 * Topics example page witha class
 * Author: Niilo Jaakkola <niilo.jaakkola@tuni.fi>
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

class Topics extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 1,
        }
    }

    render = () => {
        const { count } = this.state
        return <span>{count}</span>
    }
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Topics)
