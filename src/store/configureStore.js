import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReduser from '../reducers/expenses';
import filtersReduser from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReduser,
            filters: filtersReduser
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}