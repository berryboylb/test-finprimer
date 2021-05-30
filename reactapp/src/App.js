import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section >
        <div className="left">
          <img className="logo" src={logo} alt="logo" />
          <h1>Have an account already?<span>Get Access</span></h1>
          <a className="link" href= "goggle.com">Log in</a>
        </div>
        <div className="right">
            <form action="" method="post">

                <div>
                  <label for="email"></label>
                  <input type="email" id="email" placeholder = "Put your email"/>
                </div>

                <div>
                  <label for="password"></label>
                  <input type="password" id="password" placeholder ="Input your password"/>
                </div>

                <input type="submit" value="login"/>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
