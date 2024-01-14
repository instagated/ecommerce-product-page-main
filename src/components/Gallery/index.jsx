import React from 'react'
import { Product1, ProductThumbNail1, ProductThumbNail2, ProductThumbNail3, ProductThumbNail4 } from '../../../images'

const Index = () => {
	return (
		<section className='max-w-[445px] w-1/2 h-fit mt-[5.65rem]'>
			<div className="w-full flex flex-col">
				<div className="overflow-hidden rounded-[.9rem] w-full">
					<img src={Product1} alt="" className='w-full h-full object-cover' />
				</div>
				<div className="flex justify-between items-center mt-[1.9rem]">
					<img src={ProductThumbNail1} alt="" className='max-w-[88px] h-[88px] rounded-[.65rem]' />
					<img src={ProductThumbNail2} alt="" className='max-w-[88px] h-[88px] rounded-[.65rem]' />
					<img src={ProductThumbNail3} alt="" className='max-w-[88px] h-[88px] rounded-[.65rem]' />
					<img src={ProductThumbNail4} alt="" className='max-w-[88px] h-[88px] rounded-[.65rem]' />
				</div>
			</div>
		</section>
	)
}

export default Index