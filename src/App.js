import './App.css';

function App() {

  const header = (
      <header>
        <h1>Welcome to React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Rufaro Haruperi</p>
      </header>
  )

    const main = (
        <main>
            <p>Prerequisite to get started react.js:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </main>
    )

    const footer = (
        <footer>
            <p>Copyright {(new Date()).getFullYear()}</p>
        </footer>
    )


  return (
    <div className='container'>
        {header}
        {main}
        {footer}
    </div>
  );
}

export default App;
