import React, { useState } from "react";
import ToolbarHeader from "../Home/ToolbarHeader";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import AddGroceriesItem from "./AddGroceriesItem";
import PantryListHeader from "../Home/PantryListHeader";
import PantryList from "../Home/PantryList";
import pantryList from "../../constants/pantry.list";
import { SpacerVertical } from "../components";


export default function ScanPage() {
  const navigate = useNavigate();
  const [list, setList] = useState([])

  const onAddGroceriesClick = () => {
    alert('Pretend it is scanning!')
    setList(pantryList)
  }

  return (
    <>
      <ToolbarHeader
        title="Scan"
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
    </>
  );
}
