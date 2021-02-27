
const variables = { 
    WEB3_PROVIDER_ADDRESS: "wss://kovan.infura.io/ws/v3/2377373e9cc84228a6cea33645b511ea",
    CONTRACT_ADDRESS: "0x873C83291691eE1e8c840dFB463c2c75406f2b1d",
    ABI: '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"OffChainRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"UpdatedRequest","type":"event"},{"constant":false,"inputs":[{"internalType":"string","name":"_url","type":"string"},{"internalType":"string","name":"_key","type":"string"}],"name":"newChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_valueResponse","type":"uint256"}],"name":"updatedChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getRatingByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"_str","type":"string"}],"name":"getRatingByAddressString","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRating","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]',
    PRIVATE_KEYS: [
        '0x1234567890123456789012345678901234567890123456789012345678901234',
        '0x1234567890123456789012345678901234567890123456789012345678901234',
        '0x1234567890123456789012345678901234567890123456789012345678901234',
        '0x1234567890123456789012345678901234567890123456789012345678901234',
    ]
}

export default variables;