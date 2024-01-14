import React from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Information from './components/Information'
function App() {

	return (
		<>
			<div className="w-full min-h-screen flex flex-col items-center max-w-[1440px] pb-[3rem] m-auto">
				<Header />
				<main className='w-full h-full flex items-center max-w-[1014px]'>
					<div className="flex justify-between w-full">
						<Gallery />
						<Information />
					</div>
				</main>
			</div>
		</>
	)
}

export default App
