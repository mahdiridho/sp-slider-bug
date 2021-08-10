import { html, css, LitElement } from 'lit-element';

export class SpSliderBundle extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--sp-slider-bug-text-color, #000);
      }
    `;
  }

  render() {
    return html`
      <sp-theme scale="large" color="dark">
        <sp-slider label="Slider Label"></sp-slider>
      </sp-theme>
`;
  }
}
