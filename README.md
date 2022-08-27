# celo-token-list

This repository follows the token list standard, see [Uniswap's token-list repo](https://github.com/Uniswap/token-lists) or [tokenlists.org](https://tokenlists.org/).

## Adding a token

To request that we add a token to the list,
[file an issue](https://github.com/jesse-sawa/celo-token-list/issues/new?assignees=&labels=token+request&template=token-request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D).

with the issue description in the following format

Example:
```json
    {
      "name": "Staked Celo",
      "address": "0xC668583dcbDc9ae6FA3CE46462758188adfdfC24",
      "symbol": "stCelo",
      "decimals": 18,
      "chainId": 42220,
      "logoURI": "https://raw.githubusercontent.com/jesse-sawa/celo-token-list/master/assets/token-stcelo.svg"
    }
```

### Disclaimer

Note filing an issue does not guarantee addition to this default token list.
We do not review token addition requests in any particular order, and we do not
guarantee that we will review your request to add the token to the default list.

