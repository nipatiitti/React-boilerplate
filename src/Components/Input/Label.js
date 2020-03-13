/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react'

import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const LabelComponent = ({ placeholder, className }) => (
    <label className={className}>{placeholder}</label>
)

LabelComponent.propTypes = {
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
}

LabelComponent.defaultProps = {
    className: '',
}

const Label = styled(LabelComponent)`
    position: absolute;
    color: gray;
    margin-top: 2em;
    transition: 0.2s all ease-in-out;

    ${({ active }) =>
        active &&
        css`
            transform: translateY(-1.3em) translateX(0.3em);
            font-size: 0.8em;
            color: black;
            font-weight: bold;
        `}
`

export default Label
