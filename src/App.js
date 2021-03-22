import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div style={{ margin: '1rem' }}>
      <Button label='Default' />
      <Button label="secondary" color="secondary" />
      <Button label="Small" size="small" />
      <Button label="Large" size="large" />
    </div>
  );
}

export default App;
