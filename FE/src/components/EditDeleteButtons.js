import React, { useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddDonor from "./AddDonor";
import DeleteDonor from "./DeleteDonor";

const EditDeleteButtons = (props) => {
  const { rowData, getData } = props;
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  return (
    <>
      <IconButton color="primary" onClick={() => setOpenEditDialog(true)}>
        <EditIcon />
      </IconButton>
      <IconButton color="error" onClick={() => setOpenDeleteDialog(true)}>
        <DeleteIcon />
      </IconButton>

      {openEditDialog && (
        <AddDonor
          isDonorEdit={true}
          handleClose={() => setOpenEditDialog(false)}
          getData={getData}
          rowData={rowData}
        />
      )}

      {openDeleteDialog && (
        <DeleteDonor
          handleClose={() => setOpenDeleteDialog(false)}
          rowData={rowData}
          getData={getData}
        />
      )}
    </>
  );
};

export default EditDeleteButtons;
