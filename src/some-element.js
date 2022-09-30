import { LitElement,html,css } from "lit";

export class SomeElement extends LitElement {
  static styles = css`p { color: red }`;

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('some-element', SomeElement);