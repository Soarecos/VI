import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <div class="container">
            <h1>CtA - Main conversion</h1>
          </div>
        </header>
        <image-text></image-text>
      </div>
    );
  }
}
