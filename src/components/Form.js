import React, { useState } from "react";

function Form() {
  const [cardType, setCardType] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;

    switch (target) {
      case "name":
        setName(value);
        break;
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cardType":
        setCardType(value);
        break;
      case "expirationMonth":
        setExpirationMonth(value);
        break;
      case "expirationYear":
        setExpirationYear(value);
        break;
      case "securityCode":
        setSecurityCode(value);
        break;
      case "zipCode":
        setZipCode(value);
        break;

      default:
        console.log("error");
    }
  };
  const handleSubmit = (e) => {
    setSuccess(true);
  };

  return (
    <div>
      {success ? (
        <h1>Successfully completed payment</h1>
      ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Card Holder Name:
            <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>
            <label>
              Card Number:
            <input
                id="cardnumber"
                type="text"
                name="cardNumber"
                value={cardNumber}
                onChange={handleChange}
              />
            </label>
            <label>
              Credit Card Type:
            <select
                id="cardtype"
                name="cardType"
                value={cardType}
                onChange={handleChange}
              >
                <option value="visa">VISA</option>
                <option value="mastercard">Mastercard</option>
              </select>
            </label>
            <label>
              Expiration Date:
            <input
                id="expiration-month"
                type="text"
                name="expirationMonth"
                value={expirationMonth}
                onChange={handleChange}
              />
              <input
                id="expiration-year"
                type="text"
                name="expirationYear"
                value={expirationYear}
                onChange={handleChange}
              />
            </label>
            <label>
              Security Code:
            <input
                id="security-code"
                type="password"
                name="securityCode"
                value={securityCode}
                onChange={handleChange}
              />
            </label>
            <label>
              Zip Code:
            <input
                id="zipcode"
                type="text"
                name="zipCode"
                value={zipCode}
                onChange={handleChange}
              />
            </label>
            <input id="submit-button" type="submit" value="Submit" />
          </form>
        )}
    </div>
  );
}



export default Form;
