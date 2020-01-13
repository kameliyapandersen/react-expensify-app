import SelectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const res = SelectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Test should correctly add up a single expense', () => {
    const expense = expenses[0];
    const res = SelectExpensesTotal([expense]);
    expect(res).toBe(195);
}); 

test('Test should correctly add up multiple expenses', () => {
    const res = SelectExpensesTotal(expenses);
    expect(res).toBe(114195);
}); 