import React from "react";
import {Table as MTable, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import PropTypes from 'prop-types';

export default function Table(props) {
    if (props.data && props.data['_fields'] && props.data['rows'])
        return (
            <MTable>
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
            </MTable>
        );
    else {
        return <Typography>Invalid data type. Expected TableLike data to get passed to the visualization.</Typography>;
    }
}

Table.propTypes = {
    data: PropTypes.objectOf({
        _fields: PropTypes.arrayOf(PropTypes.string).isRequired,
        rows: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired,
    onRegisterAction: PropTypes.func,
    onRefresh: PropTypes.func
};
