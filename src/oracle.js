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
      uri: result.args.url,
      json: true
    };

    console.log("new", result.args);

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
      id = result.args.id;
      valueRetrieved = (body[result.args.key] || 0).toString();
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