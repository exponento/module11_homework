const getPercents = require('./index');

describe("", ()=>{
  it('200/100*30 = 60', () => {
  expect(getPercents(30, 200)).toBe(60);
}),
  it('100/100*30', () => {
  expect(getPercents(30, 100)).toBe(30);
}),
  it('300/100*10', () => {
  expect(getPercents(10, 300)).toBe(30);
});
});