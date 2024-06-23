const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const BreezeConnect = require('breezeconnect').BreezeConnect;
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Initialize BreezeConnect with API keys
const API_KEY = "4!(9v4419E95G62e5d44v45S3c366U%9";
const API_SECRET = "4Nu4079V1506n937R4620NS!494B8996";
const API_SESSION = "42804210";

const breeze = new BreezeConnect({'appKey': API_KEY});

breeze.generateSession(API_SECRET, API_SESSION).then(function(resp){
    console.log("Session generated successfully");
}).catch(function(err){
    console.log(err);
});

async function fetchStockData(stockCode, expiryDate) {
    try {
        const [callData, putData] = await Promise.all([
            breeze.getOptionChainQuotes({
                stockCode,
                exchangeCode: "NFO",
                productType: "options",
                expiryDate,
                right: "call"
            }),
            breeze.getOptionChainQuotes({
                stockCode,
                exchangeCode: "NFO",
                productType: "options",
                expiryDate,
                right: "put"
            })
        ]);
        console.log('Call Data:', callData); // Log call data
        console.log('Put Data:', putData);   // Log put data
        return { call: callData, put: putData };
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
}


io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('fetchData', ({ stockCode, expiryDate }) => {
        console.log(`Client requested data for stockCode: ${stockCode}, expiryDate: ${expiryDate}`);
        const intervalId = setInterval(async () => {
            try {
                const stockData = await fetchStockData(stockCode, expiryDate);
                socket.emit('stockData', stockData);
            } catch (err) {
                console.error('Error emitting stock data:', err);
            }
        }, 1000);

        socket.on('disconnect', () => {
            clearInterval(intervalId);
            console.log('Client disconnected');
        });
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
