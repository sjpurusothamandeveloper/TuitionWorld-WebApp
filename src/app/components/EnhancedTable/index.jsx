import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";

const EnhancedTable = ({heading, rows, styles, callBackFn}) => {

    useEffect(() => {
        callBackFn(rows)
    }, [callBackFn, rows])
  return (
    <TableContainer style={{ padding: "20px" }} component={Paper}>
      <Table sx={{ minWidth: 650, ...styles }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
                heading && heading.length > 0 && heading.map((hd, k1) => {
                    const hK= k1;
                    return(<TableCell key={hK}>{hd}</TableCell>);
                } )
             }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.length > 0 ? (
            rows.map((row, r1) => {
                const rk= r1;
                return (
                    <TableRow key={rk}>
                        {
                            Object.entries(row)?.map(([cellKey, cellValue], c1) => {
                                const ck= c1;
                                return(<>{cellKey !== 'hiddenValues' && <TableCell key={ck}>{cellValue}</TableCell>}</>);
                            })
                        }
                    </TableRow>
                );
            }
            )
          ) : (
            <TableRow>
              <TableCell colSpan={3}>{`No data available :(`}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EnhancedTable;
