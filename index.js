import MyButton from './MyButton';

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

// Montage de l'application dans l'élément racine
ReactDOM.render(<MyApp />, document.getElementById('root'));
