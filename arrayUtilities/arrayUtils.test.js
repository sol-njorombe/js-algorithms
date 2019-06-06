const utils = require('.');


describe('Sorting Analysis', function(){
  test('assert genArray size', function(){
    expect(utils.genArray(5).length).toEqual(5);
  });
});
