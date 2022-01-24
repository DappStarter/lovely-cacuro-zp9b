require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name random machine huge include kangaroo army gas'; 
let testAccounts = [
"0x22f6e73ce0ddd20497dffc4f667cd6599cca4c4d81a024e43b94d5417cfd5289",
"0xa2c89d2c6f05e1365e5b89bb5f09c79360bf99e8377f2e908e36ebd568f84921",
"0x3e491fcb412b3bf60e64b1b34cc8e3d7aed94ccac9e409be24ae576dae0f8a9c",
"0x3e937c6da83a2638d1ea1b62fd8601d67d4bc9f04fe4f88863961fc221f7dd84",
"0x15676b8944ca68ab9bfe77bdcc5d805bc476b70314155ce78dc992fc0ea7807c",
"0x32282f8277b974310a6c13ff37849ec5686ba2e8dc0929f96ed98be6acbb667d",
"0xc0c72433741eca87fde11428a523bd64849b102f50d54dc5c423cc69bc339be7",
"0xe729503cb585279d99d9205794f3e52ec65df2ae9577dc2839b6821809685024",
"0xe1d9067c790524afbef3e8afb687b0f5a5966eb0a7eb6a3540734894a4b09d1e",
"0x2ee8b78f3bc891c11c32e6daa066dde02dfb7dfb3e80328d138eb393eb653325"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


