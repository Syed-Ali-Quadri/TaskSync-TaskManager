import useStore from "@/store/counter";

const Home = () => {
	const count = useStore(state => state.count);
	const increment = useStore(state => state.increment);
	const decrement = useStore(state => state.decrement);
	const reset = useStore(state => state.reset);

	return (
		<div>
			<h1>
				Count: {count}
			</h1>
			<button onClick={increment}>Add 1</button>
			<button onClick={decrement}>Subtract 1</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Home;
