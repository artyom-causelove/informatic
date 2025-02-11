export default defineEventHandler((event) => {
  return [{
    title: 'Сентябрьский',
    subtitle: 'Пробник 2',
    imageCount: 3,
    text: ['первичных', '17/70', '/70'],
    footer: 'от 30.09',
  }, {
    title: 'Июньский',
    subtitle: 'Пробник 1',
    imageCount: 3,
    text: ['первичных', '12/29', '/80'],
    footer: 'от 26.06',
  }, {
    title: 'Майский',
    subtitle: 'Пробник 3',
    imageCount: 2,
    text: ['первичных', '1/31', '/8'],
    footer: 'от 01.05',
  }];
});
