import './App.css';

function App() {
  return (
    <div className='container-max'>
      <div className='container-1'></div>
      <div className='container-2'>
        <h1>JSX</h1>
        <h2>#1</h2>
        <div className='js1'></div>
        <h2>#2 function / object</h2>
        <div className='js2'></div>
        <h2>#3 function</h2>
        <div className='js3'></div>
        <h2>#4 atribu</h2>
        <div className='js4'></div>
        <h2>#5 React.createElement()</h2>
        <div className='js5'></div>
        <h2>#6</h2>
        <div className='js6'></div>
        <h1>Рендеринг элементов</h1>
      </div>
      <div className='container-3'></div>
      <div className='container-4'></div>
      <div className='container-5'></div>
    </div>
  );
}

export default App;


const element = {
  type: 'h1',
  props: {
    className: 'H1',
    children: 'Hello'
  }
};

