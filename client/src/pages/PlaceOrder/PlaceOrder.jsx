import './PlaceOrder.css'

const PlaceOrder = () => {
  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Infomation</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
      </div>
      <div className="place-order-right"></div>
    </div>
  );
}

export default PlaceOrder