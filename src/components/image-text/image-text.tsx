import { Component, h, Event, EventEmitter, State } from '@stencil/core';

interface listConfig {
  title: string;
  description: string;
  buttonLabel: string;
  imageURL: string;
  imageTitle: string;
  imageAlt: string;
  contactBoxTitle: string;
}

@Component({
  tag: 'image-text',
  styleUrl: 'image-text.scss'
})

export class ImageText {

  @State() show: boolean = false;

  @State() textPosition: 'left' | 'right' = 'left';

  @Event() toggle: EventEmitter;

  toggleComponenet(active: boolean): void {
    this.show = active;
  }

  public list: Array<listConfig> = [
    {
      title: 'A wonderful serenity has taken possessio',
      description: 'A wonderful serenity has taken possessio of my entire soul, like these sweet mo',
      buttonLabel: 'Link button',
      imageURL: '../../assets/images/image-text-mountain.jpg',
      imageTitle: 'Mountain man',
      imageAlt: 'Mountain man',
      contactBoxTitle: 'Contact us'
    }
  ]

  render() {
    if (this.textPosition === 'left') {
      return (
        <div class={'position-' + this.textPosition}>
          {this.list.map((item: listConfig, index: number) => (
            <div key={index}>
              <div class="image-text-wrap">
                <div class="container">
                  <div>
                    <div class={'image-text-' + this.textPosition}>
                      <h2 class="image-text-title">{item.title}</h2>
                      <p class="image-text-description">{item.description}</p>
                      <button class="image-text-btn" onClick={() => this.toggleComponenet(true)}>{item.buttonLabel}</button>
                    </div>
                    <img src={item.imageURL} class="image-text-image" title={item.imageTitle} alt={item.imageAlt} />
                  </div>
                </div>
              </div>
              <div class={'image-text-contact-box ' + (this.show ? 'active' : '')}>
                <div class="container">
                  <h2 class="image-text-contact-box-title">{item.contactBoxTitle}</h2>
                  <div class="image-text-contact-box-close" onClick={() => this.toggleComponenet(false)}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div class={'position-' + this.textPosition}>
          {this.list.map((item: listConfig, index: number) => (
            <div key={index}>
              <div class="image-text-wrap">
                <div class="container">
                  <div>
                    <div class={'image-text-' + this.textPosition}>
                      <h2 class="image-text-title">{item.title}</h2>
                      <p class="image-text-description">{item.description}</p>
                      <button class="image-text-btn" onClick={() => this.toggleComponenet(true)}>{item.buttonLabel}</button>
                    </div>
                    <img src={item.imageURL} class="image-text-image" title={item.imageTitle} alt={item.imageAlt} />
                  </div>
                </div>
              </div>
              <div class={'image-text-contact-box ' + (this.show ? 'active' : '')}>
                <div class="container">
                  <h2 class="image-text-contact-box-title">{item.contactBoxTitle}</h2>
                  <div class="image-text-contact-box-close" onClick={() => this.toggleComponenet(false)}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
