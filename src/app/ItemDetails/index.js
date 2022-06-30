import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pantryList from "../../constants/pantry.list";
import SpacerVertical from "../components/Spacer";
import ToolbarHeader from "../Home/ToolbarHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const height = 15;

export default function ItemDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [item] = useState(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    if (!id) return {};

    return pantryList.find((o) => o.id === id) || {};
  });

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
              {!item.barcode && (
                <>
                  <Button fullWidth variant="contained">
                    Scan Barcode
                  </Button>
                  <SpacerVertical height={height} />
                </>
              )}

              <TextField fullWidth label="Barcode" variant="standard" disabled={!!item.barcode} value={item.barcode} />
              <SpacerVertical height={height} />
            </Container>
          </Box>

          <SpacerVertical height={height} />

          <Box>
            <TextField fullWidth label="Add a name" variant="standard" value={item.label} />
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
