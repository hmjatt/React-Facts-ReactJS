import logo from "./logo.svg";
import "./App.css";

function Header() {
    return (
        <header className="App-header">
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
            </nav>
        </header>
    );
}

function MainContent() {
    return (
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </div>
    );
}

function Footer() {
	return (
		<footer>
			<small>Created with ❤️ by Harmeet Matharoo</small>
		</footer>
	)
}

function App() {
    return (
        <div className="App">
            <Header />
			<MainContent />
			<Footer />
        </div>
    );
}

export default App;
