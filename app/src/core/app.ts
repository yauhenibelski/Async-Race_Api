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

  static currentPageHtml: Promise<HTMLElement> | undefined;

  static async renderPage(idPage: string) {
    if (this.currentPageHtml) {
      (await this.currentPageHtml).remove();
    }
    if (idPage === PageId.Garage || idPage === '') {
      this.currentPageHtml = this.elements.garagePage;
      this.container.append(await this.elements.garagePage);
    }
    if (idPage === PageId.Winners) {
      this.currentPageHtml = this.elements.winnersPage;
      this.container.append(await this.elements.winnersPage);
    }
  }

  run() {
    App.container.append(App.elements.navigation);
    App.container.append(App.elements.header);
    App.renderPage(window.location.hash.slice(1));
    router();
  }
}
export default App;
