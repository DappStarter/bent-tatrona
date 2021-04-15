require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot ecology riot situate universe gentle light army gather'; 
let testAccounts = [
"0xc40aaae9e2a3b50c24fd71598be61bc7d08b35a53c6912409a8ca3a3793d5bb8",
"0x747925f37bca6fd3fe10bebe1a236f036fad88cb4a314ee7a180eeb7f7b3f892",
"0x395180c486d22eb3bc3669805b104e79527b4860aabca875942255479d51ea93",
"0x30fea5722d9b8ba9e871ed2a5d51ca44a3e50e4b85df18ef09f85b6fd9c4ca00",
"0x8b838f9377efcb9a0dd950649c0cf55346d97a713a07feac28e3e05d5cd90213",
"0xfc2a3f77e2b730a052e1ca62163ae2d8dff732460a36704565c3c08bb02791a5",
"0xd389e92d86ef567acc564f592a8c3533c9582758ecf051a3482eea6c19272a34",
"0x8a41be07ca58d1b310e00b89bf894834863597f2f81f4174124d053cbc4c3f91",
"0x63fca52755fd3343a6de0d6b7f44ebc3c37a5a589872054511e85df59fed9c71",
"0x6502601933127bab20888f3ef1a18c46c1acb12c2470e381ced8a0786f2c6826"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
