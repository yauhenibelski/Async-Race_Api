import Component from './component';

class Link extends Component {
  constructor(linkName: string, href: string, className?: string) {
    super('a', className);
    this.container.innerHTML = linkName;
    this.container.setAttribute('href', `#${href}`);
  }

  render() {
    return this.container;
  }
}
export default Link;
