import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import '../App.css';

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
            <InputLabel htmlFor="my-input"> Card Holder Name:</InputLabel>

            <TextField
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              label="John Smith"
              variant="outlined"
              color="secondary"
            />
            <InputLabel htmlFor="my-input"> Card Number:</InputLabel>

            <TextField
              id="cardnumber"
              type="text"
              name="cardNumber"
              value={cardNumber}
              onChange={handleChange}
              label="1111222233334444"
              variant="outlined"
              color="secondary"
            />

            <InputLabel htmlFor="my-input"> Credit Card Type:</InputLabel>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="cardtype"
                value={cardType}
                onChange={handleChange}
                label="Card Type"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="visa">VISA</MenuItem>
                <MenuItem value="mastercard">MASTERCARD</MenuItem>
              </Select>
            </FormControl>

            <InputLabel id="demo-simple-select-outlined-label">
              Expiration Date:{" "}
              <div className="expiry-date-container">
                <TextField
                  id="expiration-month"
                  type="text"
                  name="expirationMonth"
                  value={expirationMonth}
                  onChange={handleChange}
                  label="04"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                  id="expiration-year"
                  type="text"
                  name="expirationYear"
                  value={expirationYear}
                  onChange={handleChange}
                  label="21"
                  variant="outlined"
                  color="secondary"
                />
              </div>

            </InputLabel>

            <InputLabel htmlFor="my-input"> Security Code:</InputLabel>
            <TextField
              id="security-code"
              type="password"
              name="securityCode"
              value={securityCode}
              onChange={handleChange}
              label="***"
              variant="outlined"
              color="secondary"
            />
            <InputLabel htmlFor="my-input">Zip Code</InputLabel>
            <TextField
              id="zipcode"
              type="text"
              name="zipCode"
              value={zipCode}
              onChange={handleChange}
              label="M2G3M8"
              variant="outlined"
              color="secondary"
            />
            <Button id="submit-button" variant="contained" color="primary">
              SUBMIT
          </Button>

          </form>
        )}
    </div>
  );
}

export default Form;
