
const variables = { 
    WEB3_PROVIDER_ADDRESS: "ws://kovan.infura.io/v3/2377373e9cc84228a6cea33645b511ea",
    //WEB3_PROVIDER_ADDRESS: "http://localhost:8545", 
    CONTRACT_ADDRESS: "0x23879293a77A7509FB142efb4080A682Ea581597",
    ABI: '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"OffChainRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"string","name":"value","type":"string"}],"name":"UpdatedRequest","type":"event"},{"constant":false,"inputs":[{"internalType":"string","name":"_url","type":"string"},{"internalType":"string","name":"_key","type":"string"}],"name":"newChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_valueResponse","type":"string"}],"name":"updatedChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"_url","type":"string"}],"name":"getRating","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]',
    PRIVATE_KEYS: [
        '0xca6630593fa827d514e3fe5dd63dac94bf150086c201941fd1fbec3c67055219',
        '0xf725cf1a50e4eeadf06b418dca953b535ab2818209076f895aadfa85638ae6e8',
        '0xe047a039568ccd24ad227ad87889877fd4c59c59ef78f34569ef28cd1d0d66e3',
        '0xd564438dc076a603f1bea4f087b8d588f71a3bb9850c7c90799de28510ef8cb9'
    ]
}

export default variables;