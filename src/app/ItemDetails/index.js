import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { categories, weightUnits } from "../../constants/mock.data";
import { getId, getParamFromUrl } from "../../utils";
import QRCodeReader from "../components/QrCodeReader";
import SpacerVertical from "../components/Spacer";
import ToolbarHeader from "../Home/ToolbarHeader";
import { useApp } from "../store";
import ImagePlaceholder from "./ImagePlaceholder";

const height = 15;

export default function ItemDetailsPage() {
  const [shouldBlockForm, setShouldBlockForm] = useState(false);
  const [shouldHideSaveButton, setShouldHideSaveButton] = useState(false);
  const [isQrReaderOpen, setIsQrReaderOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { pantryList },
  } = useApp();

  const [item, setItem] = useState(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const barcode = params.get("barcode");
    const empty = { barcode: "", category: "", label: "", weightUnit: "" };

    if (id) {
      const temp = pantryList.find((o) => o.id === id);

      if (temp) {
        setShouldHideSaveButton(true);
        setShouldBlockForm(true);
      }
  
      return temp || empty;
    } else if (barcode) {
      const foundItem = pantryList.find((o) => o.barcode === barcode);
      
      if (!foundItem) return empty

      const id = getId();
      return { ...foundItem, id }
    }

    return empty;
  });

  const onQrCodeRead = (potentialUrl) => {
    setIsQrReaderOpen(false);

    const barcode = getParamFromUrl(potentialUrl, "barcode");

    if (!barcode) {
      return;      
    }
   
    const foundItem = pantryList.find((o) => o.barcode === barcode);

    if (!foundItem) {
      return;
    }
    
    setShouldBlockForm(true);
    navigate(`/app/item?barcode=${barcode}`);

    const id = getId();
    setItem({ ...foundItem, id });
  };

  const handleChange = (event) => {
    setItem({
      ...item,
      category: event.target.value,
    });
  };

  const handleUnitChange = (event) => {
    setItem({
      ...item,
      weightUnit: event.target.value,
    });
  };

  const saveItem = () => {
    pantryList.unshift(item);
    navigate("/app");
  };

  return (
    <>
      <ToolbarHeader
        title={item.title || "Register a new item"}
        StartIcon={ArrowBack}
        onStartButtonClick={() => navigate(-1)}
        EndButton={
          shouldHideSaveButton ? undefined : (
            <Button color="inherit" onClick={saveItem}>
              Save
            </Button>
          )
        }
      />
      <Container>
        <SpacerVertical height={height} />

        <Box component="form">
          <div>
            {!shouldBlockForm && (
              <div style={{ maxWidth: 400, margin: '0 auto' }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => setIsQrReaderOpen(true)}
                >
                  Scan QR Code
                </Button>
                <SpacerVertical height={height} />
              </div>
            )}
          </div>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            <Container>
              <ImagePlaceholder imgUrl={item.img_url} />
            </Container>

            <Container>
              <TextField
                fullWidth
                label="Code"
                variant="standard"
                disabled
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

            <div style={{ display: "flex" }}>
              <div style={{ flexGrow: 2, paddingRight: 30, paddingTop: 7 }}>
                <TextField
                  fullWidth
                  label="Weight"
                  variant="standard"
                  value={item.weight}
                  disabled={shouldBlockForm}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <InputLabel id="weight-unit">Unit</InputLabel>
                <Select
                  labelId="weight-unit"
                  value={item.weightUnit}
                  label="Unit"
                  variant="standard"
                  onChange={handleUnitChange}
                  disabled={shouldBlockForm}
                  fullWidth
                >
                  <MenuItem value=""></MenuItem>
                  {weightUnits.map((unit) => (
                    <MenuItem value={unit} key={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <SpacerVertical height={height} />

            <SpacerVertical height={height} />
            <InputLabel id="category">Category</InputLabel>
            <Select
              variant="standard"
              labelId="category"
              value={item.category}
              label="Category"
              onChange={handleChange}
              disabled={shouldBlockForm}
              fullWidth
            >
              <MenuItem value="">None</MenuItem>
              {categories.map((category) => (
                <MenuItem value={category} key={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>

            {/* <TextField fullWidth label="Ingredients" variant="standard" />
            <SpacerVertical height={height} />

            <TextField fullWidth label="Nutrition Facts" variant="standard" />
            <SpacerVertical height={height} /> */}
          </Box>
        </Box>
      </Container>
    </>
  );
}
