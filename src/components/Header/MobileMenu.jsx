import React from 'react'

const MobileMenu = ({ menu }) => {
	return (
		<>
			<div className='block md:hidden absolute w-3/4 h-screen bg-white inset-0'>
				<ul className='flex flex-col gap-8 text-dark-grayish-blue'>
					{
						menu.map((item, index) => (
							<li key={index} className='relative w-full group'>
								<span key={index} className='cursor-pointer' >
									{item}
								</span>
								<span className='absolute w-full h-1 bg-orange left-0 -bottom-[2.75em] transform scale-0 group-hover:scale-100 transition-all duration-[400ms]'></span>
							</li>
						))
					}
				</ul>
			</div>
		</>


	)
}

export default MobileMenu