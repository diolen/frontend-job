import * as questions from '../questions';

describe('Question 1', () => {
    it('deve retornar 5', () => {
        expect(questions.q1()).toBe(5);
    });
});

describe('Question 2', () => {
    questions.q2();

    it('Should return ababab', () => {
        expect('ab'.repeat(3)).toBe('ababab');
    });
});

describe('Question 3', () => {
    it('Should return [1, 2, 3]', () => {
        expect(questions.q3(['1', '2', '3'])).toBe([1, 2, 3]);
    });
});

