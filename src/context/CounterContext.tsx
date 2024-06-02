import { createContext, useContext } from 'react';

interface CounterContextType {
    count: number
    increment: () => void
    decrement: () => void
}

const CounterContext = createContext<CounterContextType | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = (): CounterContextType  => {
    const context = useContext(CounterContext)

    if (!context) {
        throw new Error('Counter Context is not defined')
    }

    return context
}

export default CounterContext