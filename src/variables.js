
const variables = { 
    WEB3_PROVIDER_KOVAN: "wss://kovan.infura.io/ws/v3/2377373e9cc84228a6cea33645b511ea",
    WEB3_PROVIDER_MAIN: "wss://mainnet.infura.io/ws/v3/2377373e9cc84228a6cea33645b511ea",
    CONTRACT_KOVAN: "0x873C83291691eE1e8c840dFB463c2c75406f2b1d",
    CONTRACT_MAIN: "0x8644dAC7E090bCE54Bb6c7260c7Eaf977b2984Af",
    ABI: '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"OffChainRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"UpdatedRequest","type":"event"},{"constant":false,"inputs":[{"internalType":"string","name":"_url","type":"string"},{"internalType":"string","name":"_key","type":"string"}],"name":"newChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_valueResponse","type":"uint256"}],"name":"updatedChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"getRatingByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"_str","type":"string"}],"name":"getRatingByAddressString","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRating","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]',
    PRIVATE_KEYS: [
      '',
      '0xf725cf1a50e4eeadf06b418dca953b535ab2818209076f895aadfa85638ae6e8',
      '0xe047a039568ccd24ad227ad87889877fd4c59c59ef78f34569ef28cd1d0d66e3',
      '0xd564438dc076a603f1bea4f087b8d588f71a3bb9850c7c90799de28510ef8cb9'
    ]
}

export default variables;