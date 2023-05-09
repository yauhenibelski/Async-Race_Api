abstract class Component {
  protected container: HTMLElement;

  constructor(tagName: string, className?: string) {
    this.container = document.createElement(tagName);
    if (className) this.container.className = className;
  }

  render(): Promise<HTMLElement> | HTMLElement {
    return this.container;
  }
}
export default Component;
