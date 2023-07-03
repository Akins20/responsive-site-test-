import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='welcome'>
          <img src={logo} className='logo' alt="logo"/>
          <h1>Responsive Site</h1>
          <h4>This is a test responsive site, look around and enjoy.</h4>
        </div>
        <form>
          <h3>Sign in</h3>
          <label htmlFor="fullName">Full name</label><br/>
          <input typeof='text' name='fullName' placeholder="Enter your full name..."/><br/>
          <label htmlFor='email'>Email</label><br/>
          <input typeof='email' name='email' placeholder='Enter your email...'/><br/>
          <label htmlFor="password">Password</label><br/>
          <input typeof='password' name='password' placeholder='8888888'/><br/>
          <button>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
