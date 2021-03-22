import './App.css';
import { Title } from './components/Title';
import { Button } from './components/Button';

function App() {
  return (
    <div style={{ margin: '1rem' }}>
      <Title>This is a title.</Title>

      <Button label='Default' />
      <Button label="secondary" color="secondary" />
      <Button label="Small" size="small" />
      <Button label="Large" size="large" />
    </div>
  );
}

export default App;
