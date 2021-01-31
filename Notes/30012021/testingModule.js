const math = require('./math');

describe('math',()=> {
    it('should add 1,2 and return 3',()=>{
        const result = math.sum(1,2);
        expect(result).toBe(3);
    });
    test('sum 1+2===3',() => {});
});
