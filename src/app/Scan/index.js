import React, { useState } from "react";
import ToolbarHeader from "../Home/ToolbarHeader";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "@mui/system";
import AddGroceriesItem from "./AddGroceriesItem";
import PantryListHeader from "../Home/PantryListHeader";
import PantryList from "../Home/PantryList";
import { pantryList, receipts } from "../../constants/mock.data";
import { SpacerVertical } from "../components";
import QRCodeReader from "../components/QrCodeReader";


export default function ScanPage() {
  const navigate = useNavigate();
  const location = useLocation()
  const [list, setList] = useState(() => {
    const params = new URLSearchParams(location.search)
    const id = params.get('id')
    const receipt = receipts.find(r => r.id === id)
    return receipt?.items || []
  })
  const [isQrReaderOpen, setIsQrReaderOpen] = useState(false)

  const onAddGroceriesClick = () => {
    setIsQrReaderOpen(true)
  }

  const onQrCodeRead = (text) => {
    setIsQrReaderOpen(false)
    setList(pantryList)
  }

  return (
    <>
      <ToolbarHeader
        title="Scan your receipt"
        StartIcon={ArrowBack}
        onStartButtonClick={() => navigate(-1)}
      />
      <Container>
        <p>
          Scan the QR Code to include the item and all the information to your
          digital pantry.
        </p>

        <AddGroceriesItem onClick={onAddGroceriesClick} />

        <SpacerVertical height={20} />

        <PantryListHeader title="Edit your list" />
        <PantryList list={list} />
      </Container>

      {isQrReaderOpen && (
        <QRCodeReader onClose={() => setIsQrReaderOpen(false)} onResult={onQrCodeRead} />
      )}
    </>
  );
}
