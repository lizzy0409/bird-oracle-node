require("dotenv").config();

import request from "request-promise-native";

import {
  updateRequest,
  newRequest
} from "./ethereum";

import { BigNumber } from "bignumber.js";

const start = () => {

  console.log("My log: ", "Starting app...");
  console.log("My log: ", "Account index is " + process.env.ACCOUNT);

  newRequest((error, result) => {
    
    if (error) {
      console.error(error);
      return;
    }

    console.log("My log: ", "New request", result.returnValues);
    let options = {
      uri: result.returnValues.url,
      json: true
    };

    request(options)
      .then(parseData(result))
      .then(updateRequest)
      .catch(error);    
  });
};

const parseData = result => (body) => {
  return new Promise((resolve, reject) => {
    let id, valueRetrieved;
    try {
      id = result.returnValues.id;
      valueRetrieved = body[result.returnValues.key];
      if (isNaN(valueRetrieved)) {
        valueRetrieved = Number(valueRetrieved);
        if (valueRetrieved === NaN) throw "Not a number";
      }
      let oneEther = new BigNumber(1);
      valueRetrieved = oneEther.shiftedBy(18).multipliedBy(valueRetrieved);
    } catch (error) {
      reject(error);
      return;
    }
    resolve({
      id,
      valueRetrieved
    });
  });
};

export default start;