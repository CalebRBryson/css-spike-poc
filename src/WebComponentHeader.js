const template = document.createElement('template');
template.innerHTML = `
<h2>Web Component Header</h2>`;
const style = document.createElement('style');
style.textContent = `
h2 {
  color: hotpink;
}
`
// WebComponent doesnt hot reload in development by default
// Maybe there is a solution

class WebComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'})
    shadow.appendChild(style);
    shadow.appendChild(template.content.cloneNode(true));
  }
}


customElements.define('web-component-header', WebComponent);
export default WebComponent
