import React, { useMemo, useState } from "react";
import ToolbarHeader from "../Home/ToolbarHeader";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "@mui/system";
import AddGroceriesItem from "./AddGroceriesItem";
import PantryListHeader from "../Home/PantryListHeader";
import PantryList from "../Home/PantryList";
import { getReceipt } from "../../constants/mock.data";
import { SpacerVertical } from "../components";
import QRCodeReader from "../components/QrCodeReader";
import { Button } from "@mui/material";
import ActionToolbarHeader from "../Home/ActionToolbarHeader";
import { getParamFromUrl } from "../../utils";

export default function ScanPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [selectedItems, setSelectedItems] = useState([]);

  const onItemSelected = (id) => (selected) => {
    setSelectedItems({
      ...selectedItems,
      [id]: selected,
    });
  };

  const [list, setList] = useState(() => {
    const id = params.get("id");
    const receipt = getReceipt(id);
    return receipt?.items || [];
  });
  const [isQrReaderOpen, setIsQrReaderOpen] = useState(false);

  const onAddGroceriesClick = () => {
    setIsQrReaderOpen(true);
  };

  const onQrCodeRead = (potentialUrl) => {
    setIsQrReaderOpen(false);

    const id = getParamFromUrl(potentialUrl, "id");

    if (id) {
      const receipt = getReceipt(id);
      setList(receipt?.items || []);
    } else {
      setList([]);
    }
  };

  const amountOfSelectedItems = useMemo(() => {
    return Object.values(selectedItems).filter((bool) => bool).length;
  }, [selectedItems]);

  const removeItem = (id) => {
    const temp = list.filter((item) => !selectedItems[item.id]);

    setList(temp);
    setSelectedItems({});
  };

  return (
    <>
      {amountOfSelectedItems > 0 ? (
        <ActionToolbarHeader
          title={`${amountOfSelectedItems} items selected`}
          onUnselectClick={() => setSelectedItems({})}
          endButtons={[
            <Button key="consume-btn" color="inherit" onClick={removeItem}>
              Remove
            </Button>,
          ]}
        />
      ) : (
        <ToolbarHeader
          title="Scan your receipt"
          StartIcon={ArrowBack}
          onStartButtonClick={() => navigate("/app")}
          EndButton={
            <Button
              color="inherit"
              onClick={() => navigate("/app", { state: { list } })}
            >
              Save
            </Button>
          }
        />
      )}

      <Container>
        <p>
          Scan Pantrol QR Code in your receipt to include all of your groceries
          at once to your digital pantry.
        </p>

        <AddGroceriesItem onClick={onAddGroceriesClick} />

        <SpacerVertical height={20} />

        <PantryListHeader title="Edit your list" />
        <PantryList
          list={list}
          selectedItems={selectedItems}
          onItemSelected={onItemSelected}
        />
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
