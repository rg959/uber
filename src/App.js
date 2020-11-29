import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Click on < code > Rayan GALOUZI < /code> and let's code.  <
        /p>  <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Rayan 's website  <
        /a>  <
        /header>  <
        /div>
    );
}

export default App;