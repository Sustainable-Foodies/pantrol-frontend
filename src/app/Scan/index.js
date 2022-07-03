import React, { useState } from "react";
import ToolbarHeader from "../Home/ToolbarHeader";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "@mui/system";
import AddGroceriesItem from "./AddGroceriesItem";
import PantryListHeader from "../Home/PantryListHeader";
import PantryList from "../Home/PantryList";
import { receipts } from "../../constants/mock.data";
import { SpacerVertical } from "../components";
import QRCodeReader from "../components/QrCodeReader";
import { Button } from "@mui/material";

export default function ScanPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams()

  const [list, setList] = useState(() => {
    const id = params.get("id");
    const receipt = receipts.find((r) => r.id === id);
    return receipt?.items || [];
  });
  const [isQrReaderOpen, setIsQrReaderOpen] = useState(false);

  const onAddGroceriesClick = () => {
    setIsQrReaderOpen(true);
  };

  const onQrCodeRead = (potentialUrl) => {
    let receipt = null
    try {
      const url = new URL(potentialUrl)
      const params = new URLSearchParams(url.hash.split('?')[1])
      const id = params.get('id')
      receipt = receipt[id]
    } catch (err) {
      // Ignore
    } finally {
      setList([])
      setIsQrReaderOpen(false);
    }

    setList(receipt?.items || []);
  };

  return (
    <>
      <ToolbarHeader
        title="Scan your receipt"
        StartIcon={ArrowBack}
        onStartButtonClick={() => navigate('/app')}
        EndButton={
          <Button color="inherit" onClick={() => navigate('/app', { state: { list }})}>
            Save
          </Button>
        }
      />
      <Container>
        <p>
          Scan Pantrol QR Code in your receipt to include all of your groceries at once to your digital pantry.
        </p>

        <AddGroceriesItem onClick={onAddGroceriesClick} />

        <SpacerVertical height={20} />

        <PantryListHeader title="Edit your list" />
        <PantryList list={list} />
      </Container>

      {isQrReaderOpen && (
        <QRCodeReader
          onClose={() => setIsQrReaderOpen(false)}
          onResult={onQrCodeRead}
        />
      )}
    </>
  );
}
