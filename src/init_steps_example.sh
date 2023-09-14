sqd init binance-testnet-usdt-squid --template abi
cd binance-testnet-usdt-squid

npm ci

cp ../squid-evm-examples/7-multichain/abi/erc20.json abi/erc20.json

sqd generate \
    --address 0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684 \
    --abi abi/erc20.json \
    --archive binance-testnet \
    --event 'Transfer' \
    --function '*' \
    --from 23000000

sqd up
sqd migration:generate
sqd process

sqd serve

sqd clean
sqd down


sqd auth ...
sqd deploy .
sqd logs binance-testnet-usdt-squid@v1 -c processor -f