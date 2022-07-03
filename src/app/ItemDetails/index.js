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
import { getId } from "../../utils";
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
    const empty = { barcode: "", category: "", label: "", weightUnit: "" };

    if (!id) return empty;

    const temp = pantryList.find((o) => o.id === id);

    if (temp) {
      setShouldHideSaveButton(true);
      setShouldBlockForm(true);
    }

    return temp || empty;
  });

  const showErrorToast = () => {};

  const onQrCodeRead = (text) => {
    setIsQrReaderOpen(false);
    const foundItem = pantryList.find((o) => o.barcode === text);

    if (!foundItem) {
      showErrorToast();
      return;
    }

    const id = getId();
    const newItem = { ...foundItem, id };

    setShouldBlockForm(true);
    navigate(`/app/item?${id}`);
    setItem(newItem);
  };

  const handleChange = (event) => {
    setItem({
      ...item,
      category: event.target.value,
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
                  onChange={handleChange}
                  disabled={shouldBlockForm}
                  fullWidth
                >
                  <MenuItem value=""> </MenuItem>
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
