import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './store/store'

const ReduxToolKit = () => {
    return (
        <Provider store={store}>
            <h1 className="text-3xl font-bold underline">
                Redux Toolkit - Todo App
            </h1>
            <AddTodo />
            <Todos />
        </Provider>
    )
}

export default ReduxToolKit