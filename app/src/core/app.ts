import CreateUpdateCar from './component/CreateUpdateCar';
import Navigation from './component/navigation';

class App {
  private container = document.body;

  run() {
    this.container.append(new Navigation('links').render());
    this.container.append(new CreateUpdateCar('Create car', 'create-update-car').render());
    this.container.append(new CreateUpdateCar('Update car', 'create-update-car').render());
  }
}

export default App;
