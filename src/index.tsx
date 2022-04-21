import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({
   models:{
     transaction: Model,
   },

   seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'Desenvolvedor',
          type:'deposit',
          category:'Dev',
          amount:6000,
          createdAt: new Date('2022-01-21 09:00:00'),
        },
        {
          id:2,
          title:'Gestor',
          type:'deposit',
          category:'Gestão',
          amount:10000,
          createdAt: new Date('2022-02-21 10:00:00'),
        },
        {
          id:3,
          title:'Tela',
          type:'withdraw',
          category:'Equipamento',
          amount:900,
          createdAt: new Date('2022-03-12 15:00:00'),
        }
      ],
    })
   },
  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema,request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction' , data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

