import React from 'react'

const CarouselImage = (props) => {
	return (
		<img
			src={props.image.src}
			alt={props.image.alt}
			className={`h-[400px] w-full object-cover ${props.slide === props.index ? '' : 'hidden'}`}
		/>
	)
}

export default CarouselImage
