/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

const SmartKnobedComponentMissingProps = ({
  foo = '',
  bar = 'bar',
}) => (
  <code>
    <p>You should see a console.warn about a prop with default value bar.</p>
    <p>{ foo }</p>
    <p>{ bar }</p>
  </code>
)

SmartKnobedComponentMissingProps.propTypes = {
  foo: PropTypes.string.isRequired,
}

export default SmartKnobedComponentMissingProps
