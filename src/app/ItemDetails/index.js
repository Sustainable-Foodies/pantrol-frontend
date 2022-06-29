import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SpacerVertical from "../../components/Spacer";
import ToolbarHeader from "../Home/ToolbarHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const height = 15

export default function ItemDetailsPage() {
  const navigate = useNavigate();

  return (
    <>
      <ToolbarHeader
        title="Register a new item"
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
              <Button fullWidth variant="contained">Scan Barcode</Button>

              <SpacerVertical height={height} />

              <TextField fullWidth label="Barcode" variant="standard" />
              <SpacerVertical height={height} />
            </Container>
          </Box>

          <SpacerVertical height={height} />

          <Box>
            <TextField fullWidth label="Add a name" variant="standard" />
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
