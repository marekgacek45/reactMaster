import { images } from '../images.json'
import { useState } from 'react'

import CarouselImage from './CarouselImage'
import SlideButton from './SlideButton'
import IndicatorButton from './IndicatorButton'

const Carousel = () => {
	const [slide, setSlide] = useState(0)

	const prevSlide = () => {
		setSlide(prev => (slide === 0 ? images.length - 1 : prev - 1))
	}
	const nextSlide = () => {
		setSlide(prev => (slide === images.length - 1 ? 0 : prev + 1))
	}
	return (
		<div className='w-1/2 mx-auto mt-32'>
			{images.map((image, index) => (
			<CarouselImage key={index} image={image} slide={slide} index={index} />
			))}
			<div className='flex justify-center items-center mt-3 gap-4'>
				<SlideButton onClick={prevSlide} ariaLabel="Previous Slide">prev</SlideButton>
				{images.map((_, index) => (
					<IndicatorButton key={index} onClick={() => setSlide(index)} index={index} slide={slide} />
				))}
				<SlideButton onClick={nextSlide} ariaLabel="Next Slide">next</SlideButton>
			</div>
		</div>
	)
}

export default Carousel
