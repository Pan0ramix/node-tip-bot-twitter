#!/usr/bin/env node

/**
 * SHIBACOIN RPC Connection Test Script
 * 
 * This script tests the connection to your SHIBACOIN daemon
 * Run this before starting the tip bot to verify everything is working
 */

const fs = require('fs');
const yaml = require('js-yaml');
const coin = require('node-dogecoin');

console.log('🐕 SHIBACOIN Twitter Tip Bot - RPC Connection Test\n');

// Check if config file exists
if (!fs.existsSync('./config/config.yml')) {
    console.error('❌ Configuration file not found!');
    console.log('Please copy config/config.sample.yml to config/config.yml and configure it.');
    process.exit(1);
}

// Load settings
let settings;
try {
    settings = yaml.load(fs.readFileSync('./config/config.yml', 'utf-8'));
    console.log('✅ Configuration file loaded successfully');
} catch (error) {
    console.error('❌ Error loading configuration file:', error.message);
    process.exit(1);
}

// Test RPC connection
console.log('\n🔗 Testing SHIBACOIN RPC connection...');
console.log(`Host: ${settings.rpc.host}`);
console.log(`Port: ${settings.rpc.port}`);
console.log(`User: ${settings.rpc.user}`);

const shibacoin = coin({
    host: settings.rpc.host,
    port: settings.rpc.port,
    user: settings.rpc.user,
    pass: settings.rpc.pass
});

// Test basic connection
shibacoin.getInfo(function(err, info) {
    if (err) {
        console.error('❌ Failed to connect to SHIBACOIN daemon!');
        console.error('Error:', err.message);
        console.log('\n📋 Troubleshooting checklist:');
        console.log('• Is your SHIBACOIN daemon running?');
        console.log('• Is RPC enabled in your shibacoin.conf?');
        console.log('• Are the RPC credentials correct?');
        console.log('• Is the RPC port (33863) accessible?');
        process.exit(1);
    }

    console.log('✅ Successfully connected to SHIBACOIN daemon!');
    console.log('\n📊 SHIBACOIN Network Info:');
    console.log(`Version: ${info.version}`);
    console.log(`Protocol Version: ${info.protocolversion}`);
    console.log(`Blocks: ${info.blocks}`);
    console.log(`Connections: ${info.connections}`);
    console.log(`Difficulty: ${info.difficulty}`);

    // Test balance
    shibacoin.getBalance(function(err, balance) {
        if (err) {
            console.error('❌ Error getting balance:', err.message);
            return;
        }
        
        const balanceAmount = typeof balance === 'object' ? balance.result : balance;
        console.log(`\n💰 Bot Wallet Balance: ${balanceAmount} SHIC`);
        
        if (balanceAmount === 0) {
            console.log('⚠️  Warning: Bot wallet balance is 0 SHIC');
            console.log('   Send some SHIBACOIN to the bot wallet for testing');
        }

        // Test address generation
        shibacoin.getAccountAddress('test_user', function(err, address) {
            if (err) {
                console.error('❌ Error generating test address:', err.message);
                return;
            }
            
            console.log(`\n🏠 Test Address Generated: ${address}`);
            console.log('\n🎉 All RPC tests passed!');
            console.log('\nYour SHIBACOIN Twitter Tip Bot is ready to run.');
            console.log('Start it with: npm start');
        });
    });
});

// Handle process termination
process.on('SIGINT', function() {
    console.log('\n\n👋 Test interrupted by user');
    process.exit(0);
});

process.on('uncaughtException', function(err) {
    console.error('❌ Unexpected error:', err.message);
    process.exit(1);
}); 