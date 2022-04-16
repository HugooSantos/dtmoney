import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransanctionModal(){
      setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransanctionModal} />
      <Dashboard />
    

      <GlobalStyle />
    </>
  );
}

export default App;
