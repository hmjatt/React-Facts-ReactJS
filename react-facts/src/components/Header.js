import logo from "../logo.svg";

function Header() {
    return (
        <header className="App-header">
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
                <h3 className="nav-logo-text">ReactFacts</h3>
                <h4 className="nav-title">React Project</h4>
            </nav>
        </header>
    );
}

export default Header;
