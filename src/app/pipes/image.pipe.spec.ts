import { ImagePipe } from './image.pipe';

describe('ImagePipe', () => {
  it('create an instance', () => {
    const pipe = new ImagePipe();
    expect(pipe).toBeTruthy();
  });

  it('Debe retornar la url completa de la imagen', () => {
    const pipe = new ImagePipe();
    const urlTransformed = pipe.transform('http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73', 'small');
    expect(urlTransformed).toEqual('http://x.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_small.jpg');
  });
});
