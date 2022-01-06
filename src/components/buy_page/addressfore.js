import React from "react";
import { useState } from "react";
import "./addressform.css"

export default function AddressForm() {
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [paymentInput, setpaymentInput] = useState("Bkash");
  const [paymentNumberInput, setpaymentNumberInput] = useState("");

  const handleSubmit=(e)=>{
      e.preventDefault();
      const buyerDetails = {nameInput, addressInput, numberInput, paymentInput, paymentNumberInput};
      console.log(buyerDetails);
  }

  return (
    <div className="createInput">
      <form onSubmit={handleSubmit} >
      <h2>Fill up the form</h2>
        <label>Name</label>
        <input
          type="text"
          required
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <label>Shipping Address </label>
        <input
          type="text"
          required
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
        />
        <label>Phone Number  </label>
        <input
          type="text"
          required
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value)}
        />
        <label>Select the method of payment</label>
        <select value={paymentInput}
        onChange={(e)=> setpaymentInput(e.target.value)}
        >
            <option value = "bkash">Bkash</option>
            <option value = "Rocket">Rocket</option>
            <option value = "Nogod">Nogod</option>
        </select>
        <label>Your {paymentInput} Number</label>
        <input         type="text"
          required
          value={paymentNumberInput}
          onChange={(e) => setpaymentNumberInput(e.target.value)}>

        </input>
        <button>save</button>
        <p>{nameInput}</p>
        <p>{addressInput}</p>
        <p>{numberInput}</p>
        <p>{paymentInput}</p>
      </form>
    </div>
  );
}
