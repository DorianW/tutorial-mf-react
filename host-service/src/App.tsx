import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

const Products = React.lazy(() => import("product/ProductRecommendations"))

const App = () => (
	<div className="mt-10 text-3xl mx-auto max-w-6xl">
		<div>Name: host-service</div>
		<div>Framework: react</div>
		<div>Language: TypeScript</div>
		<div>CSS: Tailwind</div>
		<div>
			<Products/>
		</div>
	</div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App/>)
