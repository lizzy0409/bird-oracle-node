require("dotenv").config();

import request from "request-promise-native";

import {
  updateRequest,
  newRequest
} from "./ethereum";
import variables from "./variables";

const start = () => {

  console.log("registering");
  console.log(variables);
  newRequest((error, result) => {
    let options = {
      uri: result.returnValues.url,
      json: true
    };

    console.log("new", result.returnValues);

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
      valueRetrieved = (body[result.returnValues.key] || 0).toString();
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