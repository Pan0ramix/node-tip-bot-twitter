# SHIBACOIN Twitter Tip Bot Setup Guide

## Prerequisites
1. **SHIBACOIN Core wallet** running with RPC enabled
2. **Twitter Developer Account** with API access
3. **Node.js** installed (version 10 or higher)

## Step-by-Step Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure SHIBACOIN Wallet
Edit your SHIBACOIN configuration file (`~/.shibacoin/shibacoin.conf`):
```ini
server=1
daemon=1
rpcuser=shibarpc
rpcpassword=sh1bap@ss
rpcport=33863
rpcallowip=127.0.0.1
txindex=1
```

Restart your SHIBACOIN daemon after making these changes.

### 3. Create Twitter Application
1. Go to [developer.twitter.com](https://developer.twitter.com)
2. Create a new app
3. Generate API keys and tokens
4. Copy the following values:
   - Consumer Key
   - Consumer Secret
   - Access Token
   - Access Token Secret

### 4. Configure the Bot
Edit `config/config.yml` and fill in your Twitter credentials:
```yaml
twitter:
    consumer_key: 'YOUR_CONSUMER_KEY'
    consumer_secret: 'YOUR_CONSUMER_SECRET'
    access_token_key: 'YOUR_ACCESS_TOKEN'
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
    twittername: 'YourBotHandle'  # without @
    twitterkeyword: 'shibacoinbot'  # or choose your own keyword
```

### 5. Test Connection
Test if your SHIBACOIN RPC is working:
```bash
curl --user shibarpc:sh1bap@ss --data-binary '{"jsonrpc": "1.0", "id":"test", "method": "getinfo", "params": [] }' -H 'content-type: text/plain;' http://localhost:33863/
```

### 6. Run the Bot
```bash
npm start
```

## Bot Usage
Users can interact with your bot by tweeting:
```
@yourbotname shibacoinbot help
@yourbotname shibacoinbot balance
@yourbotname shibacoinbot tip @someuser 10
```

## Security Checklist
- [ ] Use strong, unique passwords
- [ ] Keep API keys secure and never commit them to git
- [ ] Regularly backup your SHIBACOIN wallet
- [ ] Monitor bot activity and transactions
- [ ] Use firewall rules to protect RPC access
- [ ] Consider running the bot on a separate server

## Troubleshooting

### Common Issues:
1. **RPC Connection Error**: Check if SHIBACOIN daemon is running and RPC settings are correct
2. **Twitter API Error**: Verify your API credentials and app permissions
3. **Permission Denied**: Make sure bot account has permission to tweet
4. **Balance Issues**: Ensure the bot wallet has sufficient SHIBACOIN balance

### Log Files
Check `shibacoin-tipbot.log` for detailed error messages and activity logs.

## Support
- SHIBACOIN Discord: https://discord.gg/8qZPeAjFnh
- SHIBACOIN Telegram: https://t.me/ShibaCoinChat 