import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';

function App() {
  return (
    <div className="App">
       <WarningSign text="watch me" />
    // <WarningSign text="Watch out!" /> 
    </div>
  );
}

export default App;
