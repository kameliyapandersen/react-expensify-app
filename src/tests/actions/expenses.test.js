import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123qwe', { note: 'note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123qwe',
        updates: {
            note: 'note value'
        }
    });
});

test('Sould setup add expense action object with providet values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 235600,
        createdAt: 1000,
        note: 'This is current montht rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});


test('Sould setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0 
        }
    });
});