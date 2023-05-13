import Component from './template/component';

class PopUp extends Component {
  private content: HTMLElement | string;

  constructor(content: HTMLElement | string) {
    super('div', 'popup');
    this.content = content;
  }

  static ran(content: HTMLElement | string) {
    document.body.append(new PopUp(content).render());
  }

  private createPopUp() {
    this.container.onclick = (e) => {
      const elem = e.currentTarget as HTMLElement;
      elem.remove();
    };
    if (typeof this.content === 'string') {
      const h1 = document.createElement('h1');
      h1.innerHTML = this.content;
      this.content = h1;
    }
    this.content.addEventListener('click', (e) => e.stopPropagation());
    this.container.append(this.content);
  }

  render(): HTMLElement {
    this.createPopUp();
    return this.container;
  }
}
export default PopUp;
