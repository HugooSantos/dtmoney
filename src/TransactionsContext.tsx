import {createContext, useEffect, useState, ReactNode} from 'react'
import { api } from './services/api'
interface Transaction {
    id: number;
    title:string;
    amount:number;
    type:string;
    category:string;
    createdAt:string;
}


type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
interface TransactionProviderProps  {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction:(transaction: TransactionInput ) => void;
}
export const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
    )

export function TransactionsProvider({children}: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    function createTransaction(transaction: TransactionInput) {

        api.post('/transactions', transaction)
    }

    useEffect(() =>{
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions)
        )
    },[])

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
              {children}
        </TransactionContext.Provider>
    )
}