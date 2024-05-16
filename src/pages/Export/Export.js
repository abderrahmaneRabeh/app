import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Button, Table, TableHead, TableBody, TableRow, TableCell, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const Export = () => {
  const [data, setData] = useState([]);
  const [exportReady, setExportReady] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:9000/mesures")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setExportReady(true); // Set exportReady to true when data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleExportExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
  
    // Apply styles to individual cells
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cellAddress = { r: R, c: C };
        const cellRef = XLSX.utils.encode_cell(cellAddress);
        
        // Apply background color to header row (assuming it's the first row)
        if (R === 0) {
          worksheet[cellRef].s = { fill: { bgColor: { rgb: "FFFF00" } } };
        }
        // Apply font weight to other rows
        else {
          worksheet[cellRef].s = { font: { bold: true } };
        }
      }
    }
  
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  
    // Save the workbook to a file
    XLSX.writeFile(workbook, 'data.xlsx');
  };
  

  return (
    <div style={{ width: '98%', margin: 'auto' }}>
      <Button
        style={{ marginBottom: '20px', padding: "10px", color: theme.palette.mode === 'light' ? 'black' : 'white', background: theme.palette.mode === 'light' ? grey[50] : grey[900], border: "solid 1px grey", borderRadius: '10px', marginTop: '20px' }}
        onClick={handleExportExcel}
        disabled={!exportReady} // Disable button if data is not ready for export
      >
        Export to Excel
      </Button>
      <Table style={{ width: "100%", border: "solid 1px black", borderCollapse: "collapse", backgroundColor: theme.palette.mode === 'dark' ? grey[900] : 'white', color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ borderBottom: "solid 3px black", background: theme.palette.mode === 'dark' ? grey[800] : grey[200], color: theme.palette.mode === 'dark' ? 'white' : 'black', fontWeight: "bold", padding: '10px', textAlign: 'left' }}>Nom</TableCell>
            <TableCell style={{ borderBottom: "solid 3px black", background: theme.palette.mode === 'dark' ? grey[800] : grey[200], color: theme.palette.mode === 'dark' ? 'white' : 'black', fontWeight: "bold", padding: '10px', textAlign: 'left' }}>Unite</TableCell>
            <TableCell style={{ borderBottom: "solid 3px black", background: theme.palette.mode === 'dark' ? grey[800] : grey[200], color: theme.palette.mode === 'dark' ? 'white' : 'black', fontWeight: "bold", padding: '10px', textAlign: 'left' }}>Valeur</TableCell>
            <TableCell style={{ borderBottom: "solid 3px black", background: theme.palette.mode === 'dark' ? grey[800] : grey[200], color: theme.palette.mode === 'dark' ? 'white' : 'black', fontWeight: "bold", padding: '10px', textAlign: 'left' }}>Temps</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ nom, unite, valeurs }) => (
            <TableRow key={nom}>
              <TableCell style={{ padding: "10px", border: "solid 1px black", background: theme.palette.mode === 'dark' ? grey[900] : grey[300], color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>{nom}</TableCell>
              <TableCell style={{ padding: "10px", border: "solid 1px black", background: theme.palette.mode === 'dark' ? grey[900] : grey[300], color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>{unite}</TableCell>
              <TableCell style={{ padding: "10px", border: "solid 1px black", background: theme.palette.mode === 'dark' ? grey[900] : grey[300], color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>{valeurs[0].valeur}</TableCell>
              <TableCell style={{ padding: "10px", border: "solid 1px black", background: theme.palette.mode === 'dark' ? grey[900] : grey[300], color: theme.palette.mode === 'dark' ? 'white' : 'black' }}>{valeurs[0].temps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Export;
