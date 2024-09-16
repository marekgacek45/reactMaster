import { useState } from 'react'
import Star from './Star'

const StarRating = () => {
	const [rating, setRating] = useState()
	const [hovered, setHovered] = useState(null)

	return (
		<div className='flex justify-center items-center mt-32'>
			<div className='flex flex-col items-center gap-2'>
				<div className='flex gap-1'>
					{[...Array(5)].map((_, index) => (
						<Star
							key={index}
							handleRating={() => setRating(index + 1)}
							filled={index < (hovered !== null ? hovered : rating)}
							handleHoverFill={() => setHovered(index + 1)}
							handleHoverClear={() => setHovered(null)}
						/>
					))}
				</div>
				{rating && (
					<h2 className='text-lg'>
						Ocena: <span className='font-semibold'>{rating}</span>
					</h2>
				)}
			</div>
		</div>
	)
}

export default StarRating
