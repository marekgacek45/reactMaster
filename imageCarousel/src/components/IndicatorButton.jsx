import React from 'react'

const IndicatorButton = props => {
	return (
		<button
			onClick={props.onClick}
			className={props.index === props.slide ? 'text-purple-500 font-bold' : ''}
			aria-label={`slide ${props.index + 1}`}>
			{props.index + 1}
		</button>
	)
}

export default IndicatorButton
