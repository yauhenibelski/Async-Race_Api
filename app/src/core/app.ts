import Navigation from './component/navigation';
import GaragePage from '../pages/Garage';

class App {
  private container = document.body;

  run() {
    this.container.append(new Navigation('links').render());
    this.container.append(new GaragePage().render());
  }
}

export default App;
// fetch('http://localhost:3000/engine?id=43&status=drive', { method: 'PATCH' })
//   .then((e) => e.json())
//   .then((e) => console.log(e));
