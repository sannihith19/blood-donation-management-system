import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tableWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    maxWidth: 1300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Table = ({ rows, columns, getRowId, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.tableWrapper} elevation={2}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#efefef',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
            fontSize: '1rem',
          },
        }}
        pageSizeOptions={[5, 10]}
        autoHeight
        {...otherProps}
      />
    </Paper>
  );
};

export default Table;
