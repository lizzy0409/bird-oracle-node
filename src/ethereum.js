require("dotenv").config();

import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER_ADDRESS));
const abi = JSON.parse(process.env.ABI);
const address = process.env.CONTRACT_ADDRESS;
const contract = web3.eth.contract(abi).at(address);

export const updateRequest = ({
  id,
  valueRetrieved
}) => {
  return new Promise((resolve, reject) => {
    contract.updateRequest(id, valueRetrieved, {
      from: process.env.ACCOUNT,
      gas: 600000
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
  contract.NewRequest((error, result) => callback(error, result));
};
