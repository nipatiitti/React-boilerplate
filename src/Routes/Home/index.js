/**
 *  Name
 * Author: Niilo Jaakkola <niilo.jaakkola@ domain.fi>
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import Container from '../../Components/Container'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render = () => {
        const { weather } = this.props

        return (
            <Container>
                <span>{weather}</span>
            </Container>
        )
    }
}

Home.propTypes = {
    weather: PropTypes.string,
}

Home.defaultProps = {
    weather: 'Fetching weather for tampere',
}

const mapStateToProps = state => ({
    weather: state.weather,
})

export default connect(mapStateToProps)(Home)
