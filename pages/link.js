import Link from 'next/link'

const Linker = () => (
	<div>
		<Link href="/about">
			<a>About Page</a>
		</Link>

		<Link href="/about">
			<button>Go to About Page</button>
		</Link>

		<p>Hello there!!</p>
	</div>
)

export default Linker
