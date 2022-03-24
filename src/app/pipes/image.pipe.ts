import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImagePipe implements PipeTransform {

  transform(imgUrl: string, size: string): string {
    if(!imgUrl) {
      return;
    }

    const sizes: { [key: string]: string } = {
      small: 'portrait_small',
      standard: 'portrait_fantastic'
    };
    const img = `${imgUrl}/${sizes[size]}.jpg`;
    return img;
  }

}
