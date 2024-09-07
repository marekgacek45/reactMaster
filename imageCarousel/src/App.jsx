import { images } from './images.json'
import { useState } from 'react'

function App() {
	const [slide, setSlide] = useState(2)


		const prevSlide = () => {
			setSlide(prev => (slide === 0 ? images.length - 1 : prev - 1))
		}
		const nextSlide = () => {
			setSlide(prev => (slide === images.length - 1 ? 0 : prev + 1))
		}

	return (
		<div className='w-1/2 mx-auto mt-32'>
			{images.map((image, index) => (
				<img
					src={image.src}
					alt={image.alt}
					key={index}
					className={`h-[400px] w-full object-cover ${slide === index ? '' : 'hidden'}`}
				/>
			))}
			<div className='flex justify-center items-center mt-3 gap-4'>
				<button onClick={prevSlide}>prev</button>
				{images.map((_, index) => (
					<button key={index} onClick={() => setSlide(index)} className={index === slide ? 'text-purple-500 font-bold' : ""}>
						{index +1}
					</button>
				))}
				<button onClick={nextSlide}>next</button>
			</div>
		</div>
	)
}

export default App
