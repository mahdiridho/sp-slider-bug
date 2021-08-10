import { html, css, LitElement } from 'lit-element';
import '@spectrum-web-components/theme/sp-theme';
import '@spectrum-web-components/slider/sp-slider';

export class SpSliderBug extends LitElement {
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
