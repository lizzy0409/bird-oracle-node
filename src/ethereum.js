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
      from: variables.ACCOUNTS[process.env.ACCOUNT],
      gas: 600000
    }, (err, res) => {
      if (err === null) {
        console.log("update", res);
        resolve(res);
      } else {
        console.error("update", err);
        reject(err);
      }
    });
  });
};

export const newRequest = (callback) => {
  contract.OffChainRequest((error, result) => callback(error, result));
};
