import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<div className="bg-neutral-900">
			<Header />
			<div className="">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
