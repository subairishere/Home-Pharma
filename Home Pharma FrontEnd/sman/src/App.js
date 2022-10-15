import CartState from "./context/CartState";
import AuthState from "./context/AuthState";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <AuthState>
        <CartState>
          <Routes />
        </CartState>
      </AuthState>
    </div>
  );
}

export default App;
