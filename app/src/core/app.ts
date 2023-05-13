import Navigation from './component/navigation';
import GaragePage from '../pages/Garage';

class App {
  private container = document.body;

  async run() {
    this.container.append(new Navigation('links').render());
    this.container.append(await new GaragePage().render());
  }
}
export default App;
