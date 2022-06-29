import { Box, Modal } from "@mui/material";
import React from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Alert({ onClose, children }) {
  return (
    <Modal open onClose={onClose}>
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  );
}
