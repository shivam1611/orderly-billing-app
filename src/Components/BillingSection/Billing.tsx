import "./Billing.css";

const Billing = () => {
  return (
    <div className="billing">
      <header className="header">
        <i className="fa-solid fa-file-invoice"></i>
        <p className="title">Order Generator</p>
      </header>
      <div className="row-1">
        <button className="btn-1">Dining</button>
        <button className="btn-1">Take Away</button>
        <button className="btn-1">Dilivery</button>
      </div>
      <div className="row-4">
        <div className="detail">
          <div className="esc">
            <p className="fade-title">Sub Total</p>
            <p className="dark-title"> $123</p>
          </div>
          <div className="esc">
            <p className="fade-title">Tax 5%</p>
            <p className="dark-title">$133</p>
          </div>
        </div>
        <div className="total">
          <p className="bg-title">Total Amount:</p>
          <p className="bg-title-amount">$133</p>
        </div>
        <div className="payment-option-box">
          <button className="btn-1 min-height">
            <i className="fa-solid fa-money-bills"></i>Cash
          </button>
          <button className="btn-1 min-height">
           
            <i className="fa-solid fa-credit-card"></i>Card
          </button>
          <button className="btn-1 min-height">
           
            <i className="fa-solid fa-qrcode"></i>QR Code
          </button>
        </div>
        <div className="call-to-action-section">
          <button className="btn-disable">Cancel</button>
          <button className="btn-main">Generate Bill</button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
