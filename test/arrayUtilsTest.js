const assert = require('chai').assert;
const utils = require('../arrayUtilities');


describe('Sorting Analysis', function(){
  it('assert genArray size', function(){
    assert.lengthOf(utils.genArray(5), 5);
  }); 
});
