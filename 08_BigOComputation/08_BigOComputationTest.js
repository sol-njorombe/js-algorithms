const assert = require('chai').assert;
const fnxs = require('./functions');



describe('Searching Algorithms', function(){
  it('calculates sum and products', function(){
    const sumArr = [1,2,3,4,5];
    const results  = fnxs.OofN(sumArr);
    assert.equal(results.sum, 15);
    assert.equal(result.product, 120);
  });
});

