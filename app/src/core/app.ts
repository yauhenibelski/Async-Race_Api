import MainPageButtonsBlock from './component/MainPageButtonsBlock';
import Navigation from './component/navigation';

class App {
  private container = document.body;

  run() {
    this.container.append(new Navigation('links').render());
    this.container.append(new MainPageButtonsBlock().render());
  }
}

export default App;
