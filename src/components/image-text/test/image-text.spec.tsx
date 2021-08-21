import { newSpecPage } from '@stencil/core/testing';
import { ImageText } from '../image-text';

describe('image-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ImageText],
      html: `<image-text></image-text>`,
    });
    expect(page.root).toEqualHtml(`
      <image-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </image-text>
    `);
  });
});
