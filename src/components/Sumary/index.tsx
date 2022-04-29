import React , {useContext} from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";
import { TransactionContext } from '../../TransactionsContext';

export function Sumary(){
   const { transactions } = useContext(TransactionContext)
   const totalDeposits = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            return acc + transaction.amount
        }

        return acc;
   },0)
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{totalDeposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}