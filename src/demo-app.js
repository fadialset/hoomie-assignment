import { LitElement,html,css } from "lit";
import './some-element.js';

export class DemoApp extends LitElement {
  static styles = css`p { color: red }`;

  static properties = {
    name: {type: String},
    childName: {type: String},
  };

  constructor() {
    super();
    this.name = 'Somebody';
    this.childName = 'child';
  }

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
      <some-element .name=${this.childName}></some-element>
    `;
  }
}
customElements.define('demo-app', DemoApp);