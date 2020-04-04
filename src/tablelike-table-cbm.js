import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

function TablelikeTableCBM(props) {
    if (props.data && props.data['_fields'] && props.data['rows'])
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        {props.data._fields.map(field => <TableCell key={field}>{field}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.rows.map((row, index) => (
                        <TableRow key={index}>
                            {props.data._fields.map(field => (
                                <TableCell key={field}>{row[field]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    else {
        return (
            <Typography>
                Invalid data type. Expected TableLike data to get passed to the visualization.
            </Typography>
        );
    }
}

TablelikeTableCBM.propTypes = {
    data: PropTypes.shape({
        _fields: PropTypes.arrayOf(PropTypes.string).isRequired,
        rows: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired,
    registerMenuItem: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    storage: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired
};

export default TablelikeTableCBM;
