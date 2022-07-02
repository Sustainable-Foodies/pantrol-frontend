import {
  AppBar,
  createTheme,
  Dialog,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { QrReader } from "react-qr-reader";
import CloseIcon from "@mui/icons-material/Close";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const videoWrapper = {
  background: "lightgray",
  height: "100%",
};

export default function QRCodeReader({ onClose, onResult }) {
  const lastResult = useRef()
  const beep = useRef(new Audio('https://www.myinstants.com/media/sounds/timer_beep.mp3'))

  const onReadResult = (result, error) => {
    if (!!result) {
      if (lastResult.current === result.text) {
        return
      }

      beep.current.play()
      lastResult.current = result.text;
      onResult(result.text);
    }
  };

  return (
    <Dialog fullScreen open onClose={onClose}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>

            <Typography variant="h6" component="div">
              Scan your QR Code
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={videoWrapper}>
          <QrReader
            constraints={{ facingMode: "environment" }}
            onResult={onReadResult}
          />
        </div>
      </ThemeProvider>
    </Dialog>
  );
}
