import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import AddDonor from './AddDonor';
import DeleteDonor from './DeleteDonor';

const EditDeleteButtons = ({ rowData, getData }) => {
  const [isEditClicked, setIsEditClicked] = useState(false)
  const [isDeleteClicked,setIsDeleteClicked]=useState(false)

  return (
    <>
      <IconButton color="primary" onClick={()=>setIsEditClicked(true)}>
        <EditIcon />
      </IconButton>
      <IconButton color="secondary" onClick={()=>setIsDeleteClicked(true)}>
        <DeleteIcon />
      </IconButton>
      {isEditClicked && 
      <AddDonor
      isDonorEdit = {true}
      handleClose = {()=>setIsEditClicked(false)}
      getData={getData}
      rowData={rowData}
      />}
      {isDeleteClicked &&
      <DeleteDonor
      handleClose = {() => setIsDeleteClicked(false)}
      rowData={rowData}
      getData={getData}
    />}
    </>
  );
};

export default EditDeleteButtons;
