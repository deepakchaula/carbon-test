import React from 'react';
import {Button} from 'carbon-components-react';
import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableExpandHeader,
    TableHeader,
    TableBody,
    TableExpandRow,
    TableCell,
    TableExpandedRow
} from 'carbon-components-react';

const RepoTable = ({rows, headers}) => {
    return (
        <DataTable rows={rows}
            headers={headers}
            render={
                ({
                    rows,
                    headers,
                    getHeaderProps,
                    getRowProps,
                    getTableProps
                }) => (
                    <TableContainer title="Courses" description="A collection of course">
                        <Button>Add Course</Button>
                        <Table {...getTableProps()}>
                            <TableHead>
                                <TableRow>
                                    <TableExpandHeader/> {
                                    headers.map(header => (
                                        <TableHeader {...getHeaderProps({ header })}>
                                            {
                                            header.header
                                        } </TableHeader>
                                    ))
                                } </TableRow>
                            </TableHead>
                            <TableBody> {
                                rows.map(row => (
                                    <React.Fragment key={
                                        row.id
                                    }>
                                        <TableExpandRow {...getRowProps({ row })}>
                                            {
                                            row.cells.map(cell => (
                                                <TableCell key={
                                                    cell.id
                                                }>
                                                    {
                                                    cell.value
                                                }</TableCell>
                                            ))
                                        } </TableExpandRow>
                                        <TableExpandedRow colSpan={
                                            headers.length + 1
                                        }>
                                            <p>Row description</p>
                                        </TableExpandedRow>
                                    </React.Fragment>
                                ))
                            } </TableBody>
                        </Table>
                    </TableContainer>
                )
            }/>
    );
};

export default RepoTable;
