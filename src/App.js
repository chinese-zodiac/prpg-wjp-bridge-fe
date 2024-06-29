import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import WithdrawAccount from "./components/account/WithdrawAccount";
import DepositAccount from "./components/account/DepositAccount";
import { Image } from "react-bootstrap";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="background_image"></div>
        <div className="main_wrap">
          <Routes>
            <Route path="/" element={<Deposit />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/account/deposit" element={<DepositAccount />} />
            <Route path="/account/withdraw" element={<WithdrawAccount />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
