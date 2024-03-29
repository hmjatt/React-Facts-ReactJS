import logo from "../logo-main-light.svg";
import darkLogo from "../logo-main.svg";

function MainContent(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main-title">Fun facts about React</h1>
            <img
                src={props.darkMode ? darkLogo : logo}
                className="App-logo-main"
                alt="logo"
            />
            <ul className="main-facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </main>
    );
}

export default MainContent;
