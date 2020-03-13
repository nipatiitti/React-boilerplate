import styled, { css } from 'styled-components'

import Input from './BaseInput'

const ErrorInput = styled(Input)`
    ${props =>
        props.error &&
        css`
            color: salmon;
            border-color: salmon;
        `}
`

export { Input, ErrorInput }
