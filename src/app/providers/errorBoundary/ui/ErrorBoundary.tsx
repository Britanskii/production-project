import { Component, ErrorInfo, ReactNode, Suspense } from "react"
import { PageError } from "widgets/pageError/ui/PageError"

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error(error, errorInfo)
	}

	render() {
		const { hasError } = this.state

		if (hasError) {
			return (
				<Suspense fallback={""}>
					<PageError/>
				</Suspense>
			)
		}

		return this.props.children
	}
}
