import './App.css';

function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

let elem2 = <Welcome name="Sara"/>;

function APP(){
  return (
    <div>
      <Welcome name="Rahim"/>
      <Welcome name="Abubacr"/>
      <Welcome name="Mujtabo"/>
    </div>
  )
}


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
        <h2>ReactDOM.createRoot(document.getElementById('root'));</h2>
        <h2>root.render()</h2>
        <div className='js7'></div>
        <h1>Компоненты и пропсы</h1>
        <div className='js8'></div>
        <div className='js9'></div>
        <div className='js10'></div>
        <p>{elem2}</p>
        <div className='js11'></div>
        <APP />
      </div>
      <div className='container-3'></div>
      <div className='container-4'></div>
      <div className='container-5'></div>
    </div>
  );
}

export default App;


