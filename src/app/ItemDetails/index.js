import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pantryList, categories } from "../../constants/pantry.list";
import { getId } from "../../utils";
import QRCodeReader from "../components/QrCodeReader";
import SpacerVertical from "../components/Spacer";
import ToolbarHeader from "../Home/ToolbarHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const height = 15;

export default function ItemDetailsPage() {
  const [shouldBlockForm, setShouldBlockForm] = useState(false);
  const [isQrReaderOpen, setIsQrReaderOpen] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();

  const [item, setItem] = useState(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const empty = { barcode: "", category: "" };

    if (!id) return empty;

    const temp = pantryList.find((o) => o.id === id);

    if (temp) setShouldBlockForm(true)

    return temp || empty;
  });

  const showErrorToast = () => {

  }

  const onQrCodeRead = (text) => {
    setIsQrReaderOpen(false);
    const temp = pantryList.find((o) => o.barcode === text);

    if (!temp) {
      showErrorToast()
      return
    }

    setShouldBlockForm(true)
    navigate(`/app/item?${getId()}`)
    setItem(temp);
  };

  const handleChange = (event) => {
    setItem({
      ...item,
      category: event.target.value,
    })
  };  

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
              <ImagePlaceholder imgUrl={item.img_url} />
            </Container>

            <Container>
              {!shouldBlockForm && (
                <>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => setIsQrReaderOpen(true)}
                  >
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
              label="Product name"
              variant="standard"
              value={item.label}
              disabled={shouldBlockForm}
            />
            <SpacerVertical height={height} />

            <TextField fullWidth label="Add weight" variant="standard" />
            <SpacerVertical height={height} />

            <SpacerVertical height={height} />
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category"
              value={item.category}
              label="Category"
              onChange={handleChange}
              disabled={shouldBlockForm}
              fullWidth
            >
              <MenuItem value="">None</MenuItem>
              {categories.map(category => (
                <MenuItem value={category} key={category}>{category}</MenuItem>
              ))}
            </Select>

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
