import React from "react";
import Table from "@material-ui/core/Table";
import {TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

export default function Table(props) {
    if (props.data && props.data['_fields'] && props.data['rows'])
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        {props.data._fields.map(field => <TableCell>{field}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.rows.map(row => (
                        <TableRow>
                            {props.data._fields.map(field => (
                                <TableCell>{row[field]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    else {
        return <Typography>Invalid data type. Expected TableLike data to get passed to the visualization.</Typography>;
    }
}
