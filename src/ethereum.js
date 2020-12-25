require("dotenv").config();

import Web3 from "web3";
import variables from "./variables";

const web3 = new Web3(new Web3.providers.HttpProvider(variables.WEB3_PROVIDER_ADDRESS));
const abi = JSON.parse(variables.ABI);
const address = variables.CONTRACT_ADDRESS;
const contract = web3.eth.contract(abi).at(address);

export const updateRequest = ({
  id,
  valueRetrieved
}) => {
  return new Promise((resolve, reject) => {
    contract.updatedChainRequest(id, valueRetrieved, {
      from: process.env.ACCOUNT,
      gas: 60000
    }, (err, res) => {
      if (err === null) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  });
};

export const newRequest = (callback) => {
  contract.OffChainRequest((error, result) => callback(error, result));
};
