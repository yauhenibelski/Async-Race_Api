import Navigation from './component/navigation';
import GaragePage from '../pages/Garage';
import Winners from '../pages/Winners';
import Header from './component/Header';
import { PageId } from './constants/PageId';
import { router } from './utils/router';

class App {
  static container = document.body;

  static elements = {
    navigation: new Navigation('links').render(),
    header: new Header().render(),
    winnersPage: new Winners(PageId.Winners).render(),
    garagePage: new GaragePage(PageId.Garage).render(),
  };

  static currentPageHtml: HTMLElement | undefined;

  static renderPage(idPage: string) {
    if (this.currentPageHtml) {
      this.currentPageHtml.remove();
    }
    if (idPage === PageId.Garage) {
      this.currentPageHtml = this.elements.garagePage;
      this.container.append(this.elements.garagePage);
    }
    if (idPage === PageId.Winners) {
      this.currentPageHtml = this.elements.winnersPage;
      this.container.append(this.elements.winnersPage);
    }
  }

  run() {
    App.container.append(App.elements.navigation);
    App.container.append(App.elements.header);
    App.renderPage(PageId.Garage);
    router();
  }
}
export default App;
