import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../OptionChainTable.css';
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from "../components/topbar";
import Navbar from "../components/headeroption";
import Footer from "../components/fotter"; 


const lotSizes = {
    AARIND: 1000,
    ABB: 125,
    ABBIND: 20,
    ACC: 300,
    ADAENT: 300,
    ADAPOR: 400,
    ADICAP: 5400,
    ADIFAS: 2600,
    ALKLAB: 100,
};

const CloneOptionChainTable = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [stockCode, setStockCode] = useState('NIFTY');
    const [expiryDate, setExpiryDate] = useState('20-Jun-2024');

    const stockCodes = ['NIFTY', 'TCS', 'WIPRO'];
    const expiryDates = ['20-Jun-2024', '27-Jun-2024'];

    useEffect(() => {
    const socket = io('http://localhost:3000');
    
    socket.emit('fetchData', { stockCode, expiryDate });

    socket.on('stockData', (stockData) => {
        console.log('Received stock data:', stockData); // Log received data
        if (stockData && stockData.call && stockData.put) {
            const callSuccess = stockData.call.Success || [];
            const putSuccess = stockData.put.Success || [];
            if (Array.isArray(callSuccess) && Array.isArray(putSuccess)) {
                const combinedData = [...callSuccess, ...putSuccess];
                setData(combinedData);
                setError(null);
            } else {
                setError(new Error('Invalid data structure'));
            }
        } else {
            setError(new Error('Invalid data received'));
        }
    });

    socket.on('connect_error', (err) => {
        setError(err);
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from server');
    });

    return () => {
        socket.disconnect();
    };
}, [stockCode, expiryDate]);


    const handleStockCodeChange = (e) => {
        setStockCode(e.target.value);
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    const calculateMultiple = () => {
        if (data.length < 11) return 0;
        return data[10].strike_price - data[9].strike_price;
    };

    const mround = (value, multiple) => {
        if (!multiple || value === 0) return value;
        return Math.round(value / multiple) * multiple;
    };

    const calculateRoundData = () => {
        if (data.length > 1) {
            const multiple = calculateMultiple();
            const spotPrice = data[0].spot_price;
            return mround(spotPrice, multiple);
        }
        return 0;
    };

    const ceTotalOi = data.reduce((acc, row) => acc + row.ce_total_oi, 0);
    const peTotalOi = data.reduce((acc, row) => acc + row.pe_total_oi, 0);
    const ceTotalChoi = data.reduce((acc, row) => acc + row.ce_total_choi, 0);
    const peTotalChoi = data.reduce((acc, row) => acc + row.pe_total_choi, 0);

    const roundData = calculateRoundData();
    const filteredData = [];

    if (roundData && data.length > 0) {
        const matchIndices = data
            .map((row, index) => (row.strike_price === roundData ? index : -1))
            .filter(index => index !== -1);

        matchIndices.forEach(index => {
            const startIndex = Math.max(0, index - 20);
            const endIndex = Math.min(data.length, index + 20);
            const matchedSlice = data.slice(startIndex, endIndex);
            filteredData.push(matchedSlice);
        });
    }

    const lotSize = lotSizes[stockCode] || '-';

    return (
        <div>
            <Topbar />
            <Navbar />
            <div className='container-fluid bg-dark text-light H-75'>
                 <div className='d-flex justify-content-center align-items-center'>
                       <div>
                         <h1>NSE Premium Option Chain Data</h1>
                       </div>
                 </div>
            </div>
            
            <main>

            <div className='container-fluid'>
                 <div className='d-flex justify-content-start'>
                       <div>
                       <form className='d-flex gap-4'  onSubmit={(e) => e.preventDefault()}>
                    
                    <div>
                        <label htmlFor="cloneStockCode">Stock Code:</label>
                        <select
                            id="cloneStockCode"
                            value={stockCode}
                            className='py-0 px-4'
                            onChange={handleStockCodeChange}
                        >
                            {stockCodes.map((code) => (
                                <option key={code} value={code}>{code}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cloneExpiryDate">Expiry Date:</label>
                        <select
                            id="cloneExpiryDate"
                            value={expiryDate}
                            className='py-0 px-4'
                            onChange={handleExpiryDateChange}
                        >
                            {expiryDates.map((date) => (
                                <option key={date} value={date}>{date}</option>
                            ))}
                        </select>
                    </div>
                    <button className="btn btn-secondary py-0 px-5 animated slideInLeft" type="submit">Submit</button>
                </form>
                       </div>
                 </div>
            </div>
                
    
                <table className='firsttable'>
                    <thead>
                        <tr>
                            <th>MULTIPLE</th>
                            <th>LOT SIZE</th>
                            <th className='stockcodecmp'>{stockCode}(CMP)</th>
                            <th>CE TOTAL OI</th>
                            <th>PE TOTAL OI</th>
                            <th>CE TOTAL CHOI</th>
                            <th>PE TOTAL CHOI</th>
                            <th>ATM STRIKE PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.length > 1 ? calculateMultiple() : '-'}</td>
                            <td>{lotSize}</td>
                            <td>{data.length > 0 ? data[0].spot_price : '-'}</td>
                            <td>{ceTotalOi}</td>
                            <td>{peTotalOi}</td>
                            <td>{ceTotalChoi}</td>
                            <td>{peTotalChoi}</td>
                            <td>{roundData}</td>
                        </tr>
                    </tbody>
                </table>
    
                {filteredData.length > 0 ? (
                    <div className="table-container">
                        {filteredData.map((matchedTableData, index) => (
                            <div key={index} className="table-wrapper">
                                <table className="option-chain-table">
                                    <thead>
                                        <tr>
                                            <th>Strike Price</th>
                                            <th>LTP</th>
                                            <th>LTT</th>
                                            <th>Best Offer Price</th>
                                            <th>Best Offer Quantity</th>
                                            <th>Open</th>
                                            <th>High</th>
                                            <th>Low</th>
                                            <th>Previous Close</th>
                                            <th>LTP % Change</th>
                                            <th>Upper Circuit</th>
                                            <th>Total Quantity Traded</th>
                                            <th>Spot Price</th>
                                            <th>Open Interest</th>
                                            <th>Change in OI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {matchedTableData.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                <td className={
                                                    row.strike_price === roundData 
                                                    ? 'highlighted-cell' 
                                                    : Math.abs(data.findIndex(item => item.strike_price === row.strike_price) - data.findIndex(item => item.strike_price === roundData)) <= 20
                                                    ? 'yellow' 
                                                    : ''
                                                }>
                                                    {row.strike_price}
                                                </td>
                                                <td>{row.ltp}</td>
                                                <td>{row.ltt}</td>
                                                <td>{row.best_offer_price}</td>
                                                <td>{row.best_offer_quantity}</td>
                                                <td>{row.open}</td>
                                                <td>{row.high}</td>
                                                <td>{row.low}</td>
                                                <td>{row.previous_close}</td>
                                                <td>{row.ltp_percent_change}</td>
                                                <td>{row.upper_circuit}</td>
                                                <td>{row.total_quantity_traded}</td>
                                                <td>{row.spot_price}</td>
                                                <td>{row.open_interest}</td>
                                                <td>{row.change_in_oi}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No data available. Please select options and click Submit.</p>
                )}
    
                {error && <div>Error: {error.message}</div>}
            </main>
            <Footer />

        </div>
    );
    
    
};

export default CloneOptionChainTable;
