
const WEB3_PROVIDER_ADDRESS = "https://kovan.infura.io/v3/2377373e9cc84228a6cea33645b511ea";

const CONTRACT_ADDRESS = 0xD918D7334408a594a9eE020e398b4b3041499c00;

const ABI = '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"OffChainRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"string","name":"value","type":"string"}],"name":"UpdatedRequest","type":"event"},{"constant":false,"inputs":[{"internalType":"string","name":"_url","type":"string"},{"internalType":"string","name":"_key","type":"string"}],"name":"newChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_valueResponse","type":"string"}],"name":"updatedChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"_url","type":"string"}],"name":"getRating","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]';

const ACCOUNTS = [ 0,
    0x35fA8692EB10F87D17Cd27fB5488598D33B023E5,
    0x58Fd79D34Edc6362f92c6799eE46945113A6EA91,
    0x0e4338DFEdA53Bc35467a09Da483410664d34e88
];

export default {WEB3_PROVIDER_ADDRESS, CONTRACT_ADDRESS, ABI, ACCOUNTS};