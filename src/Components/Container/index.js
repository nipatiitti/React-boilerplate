/**
 * Container component. Accepts props for vertical or horizontal
 * Author: Niilo Jaakkola <niilo.jaakkola@ domain.fi>
 */

import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
    justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')};
    align-items: ${({ centered }) => (centered ? 'center' : 'flex-start')};
`

Container.propTypes = {
    vertical: PropTypes.bool,
    width: PropTypes.string,
    centered: PropTypes.bool,
}

Container.defaultProps = {
    vertical: true,
    size: '20em',
    centered: true,
}

export default Container
