/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { data } from './testData';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function Rapport() {
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        console.log(e.target.value);
    };

    const filteredData = selectedDate
        ? data.mesures.filter(measure => measure.date === selectedDate)
        : data.mesures;

    // Calculate average values
    const averages = {};
    data.mesures.forEach(measure => {
        for (const key in measure.valeurs) {
            if (!averages[key]) averages[key] = [];
            averages[key].push(measure.valeurs[key]);
        }
    });

    for (const key in averages) {
        averages[key] = averages[key].reduce((acc, curr) => acc + curr, 0) / averages[key].length;
    }

    return (
        <div>
            <h2>Select Date:</h2>
            <input style={{ margin: '20px' }} type="date" value={selectedDate} onChange={handleDateChange} />
            <button onClick={() => location.reload()}>actualiser</button>
            <h2>Air Quality Data</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Measure Name</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>MO</TableCell>
                            <TableCell>Pr</TableCell>
                            <TableCell>VI</TableCell>
                            <TableCell>VQ</TableCell>
                            <TableCell>TI</TableCell>
                            <TableCell>LI</TableCell>
                            <TableCell>LQ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((measure, index) => (
                            <TableRow key={index}>
                                <TableCell>{measure.nom}</TableCell>
                                <TableCell>{measure.date}</TableCell>
                                {Object.keys(measure.valeurs).map((key, index) => (
                                    <TableCell key={index}>{measure.valeurs[key]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h2>Averages</h2>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Element</TableCell>
                            <TableCell>Average Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(averages).map((key, index) => (
                            <TableRow key={index}>
                                <TableCell>{key}</TableCell>
                                <TableCell>{averages[key]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Rapport;
