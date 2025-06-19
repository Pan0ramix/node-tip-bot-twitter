# SHIBACOIN Twitter Tip Bot

SHIBACOIN Twitter Tip Bot is an open-source node.js Twitter bot for tipping with SHIBACOIN (SHIC). 

It is forked from unek's IRC node-tip-bot (https://github.com/unek/node-tip-bot) and adapted for SHIBACOIN and Twitter.
It uses [node-dogecoin](https://github.com/countable/node-dogecoin) for integration with SHIBACOIN's JSON RPC API.

## Installation
To install the SHIBACOIN Twitter Tip Bot simply clone this repo and install dependencies:
```bash
git clone https://github.com/yourusername/shibacoin-twitter-tip-bot
cd shibacoin-twitter-tip-bot
npm install
```
After installation proceed to the configuration.

## Configuration
The configuration file `config/config.yml` has been pre-configured for SHIBACOIN. You need to:

1. **Set up Twitter API credentials** - Create an application at [developer.twitter.com](https://developer.twitter.com) and fill in:
   * **consumer_key**: Your Twitter app consumer key
   * **consumer_secret**: Your Twitter app consumer secret  
   * **access_token_key**: Your Twitter app access token key
   * **access_token_secret**: Your Twitter app access token secret
   * **twittername**: Your bot's Twitter handle (without @)

2. **Configure SHIBACOIN daemon** - The RPC settings are pre-configured for SHIBACOIN:
   * **host**: localhost
   * **port**: 33863 (SHIBACOIN's default RPC port)
   * **user**: shibarpc 
   * **pass**: sh1bap@ss

3. **Adjust coin settings** if needed:
   * **withdrawal_fee**: Fee charged on withdrawals (default: 1 SHIC)
   * **min_withdraw**: Minimum withdrawal amount (default: 10 SHIC)
   * **min_confirmations**: Required confirmations (default: 6)
   * **min_tip**: Minimum tip amount (default: 1 SHIC)

## SHIBACOIN Daemon Setup
Before running the bot, you need to be running your SHIBACOIN daemon with JSON-RPC API enabled. Add this to your SHIBACOIN configuration file (e.g., `~/.shibacoin/shibacoin.conf`):

```ini
server=1
daemon=1
rpcuser=shibarpc
rpcpassword=sh1bap@ss
rpcport=33863
rpcallowip=127.0.0.1
```

## How to run
To run the bot simply use:
```bash
node bin/tipbot
```
or
```bash
npm start
```

## Commands
Commands are executed by mentioning your bot with the keyword (default: `shibacoinbot`) followed by the command:

| **Command** | **Arguments**     | **Description**
|-------------|-------------------|--------------------------------------------------------------------
| `balance`   |                   | displays your current SHIBACOIN wallet balance
| `address`   |                   | displays address where you can send SHIBACOIN to the tip bot
| `withdraw`  | `<address>`       | withdraws your whole wallet balance to specified SHIBACOIN address
| `tip`       | `<@user> <amount>`| sends the specified amount of SHIBACOIN to the specified user
| `help`      |                   | displays help message with available commands
| `terms`     |                   | displays terms and conditions for using the tip bot

## Example Usage
```
@yourbotname shibacoinbot tip @someuser 10
@yourbotname shibacoinbot balance
@yourbotname shibacoinbot address
@yourbotname shibacoinbot withdraw SYourShibacoinAddressHere
```

## SHIBACOIN Resources
- **Website**: https://shibapow.org
- **Explorer**: https://explorer.shibacoinshic.org
- **Discord**: https://discord.gg/8qZPeAjFnh
- **Telegram**: https://t.me/ShibaCoinChat
- **Twitter**: https://twitter.com/Shibacoin_Shic

## Security Notice
- Keep your Twitter API credentials secure
- Use strong passwords for your SHIBACOIN wallet
- Regularly backup your wallet
- Monitor bot activity and balances

## License
MIT License


