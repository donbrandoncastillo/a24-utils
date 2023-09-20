import { hasRows, toSentenceCase } from '../../utils';

describe('Unit test toSentenceCase fn', () => {
  it('Happy path, should convert a string to sentence case', () => {
    const input = 'hello world';
    const output = toSentenceCase(input);
    
    expect(output).toBe('Hello world');
  });
});

describe('Unit test hasRows fn', () => {
    it('Happy path, should return true if the array has rows', () => {
        const input = ['hello world'];
        const output = hasRows(input);
        
        expect(output).toBe(true);
    });
});