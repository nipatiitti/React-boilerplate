import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Label from './Label'

const BaseInput = ({ value, onChange, placeholder, onBlur, onFocus, className }) => {
    const [active, setActive] = useState(false)

    return (
        <div style={{ display: 'flex' }}>
            {placeholder && <Label placeholder={placeholder} active={active} />}
            <input
                value={value}
                onChange={onChange}
                className={className}
                onFocus={() => {
                    onFocus()
                    setActive(true)
                }}
                onBlur={() => {
                    onBlur()
                    setActive(false)
                }}
            />
        </div>
    )
}

BaseInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    className: PropTypes.string,
}

BaseInput.defaultProps = {
    placeholder: '',
    onBlur: () => {},
    onFocus: () => {},
    className: '',
}

export default BaseInput
