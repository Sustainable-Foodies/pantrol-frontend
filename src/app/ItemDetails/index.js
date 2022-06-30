import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pantryList from "../../constants/pantry.list";
import QRCodeReader from "../components/QrCodeReader";
import SpacerVertical from "../components/Spacer";
import ToolbarHeader from "../Home/ToolbarHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const height = 15;

export default function ItemDetailsPage() {
  const shouldRenderScanButton = useRef(true)
  const [isQrReaderOpen, setIsQrReaderOpen] = useState(false)

  const navigate = useNavigate();
  const location = useLocation();

  const [item, setItem] = useState(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const empty = { barcode: '' }

    if (!id) return empty;

    const temp = pantryList.find((o) => o.id === id);

    if (temp) shouldRenderScanButton.current = false;

    return temp || empty;
  });

  
  const onQrCodeRead = (text) => {
    setIsQrReaderOpen(false)
    setItem({ ...item, barcode: text })
  }

  return (
    <>
      <ToolbarHeader
        title={item.title || "Register a new item"}
        StartIcon={ArrowBack}
        onStartButtonClick={() => navigate(-1)}
      />
      <Container>
        <SpacerVertical height={height} />

        <Box component="form">
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            <Container>
              <ImagePlaceholder />
            </Container>

            <Container>
              {shouldRenderScanButton.current && (
                <>
                  <Button fullWidth variant="contained" onClick={() => setIsQrReaderOpen(true)}>
                    Scan Barcode
                  </Button>
                  <SpacerVertical height={height} />
                </>
              )}

              <TextField
                fullWidth
                label="Barcode"
                variant="standard"
                disabled={!!item.barcode}
                value={item.barcode}
              />
              <SpacerVertical height={height} />

              {isQrReaderOpen && (
                <QRCodeReader
                  onClose={() => setIsQrReaderOpen(false)}
                  onResult={onQrCodeRead}
                />
              )}
            </Container>
          </Box>

          <SpacerVertical height={height} />

          <Box>
            <TextField
              fullWidth
              label="Add a name"
              variant="standard"
              value={item.label}
            />
            <SpacerVertical height={height} />

            <TextField fullWidth label="Add weight" variant="standard" />
            <SpacerVertical height={height} />

            <TextField fullWidth label="Category" variant="standard" />
            <SpacerVertical height={height} />

            <TextField fullWidth label="Ingredients" variant="standard" />
            <SpacerVertical height={height} />

            <TextField fullWidth label="Nutrition Facts" variant="standard" />
            <SpacerVertical height={height} />
          </Box>
        </Box>
      </Container>
    </>
  );
}
