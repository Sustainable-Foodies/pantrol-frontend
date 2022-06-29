import React from "react"
import ToolbarHeader from "../Home/ToolbarHeader"
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function ScanPage () {
  const navigate = useNavigate()

  return (
    <>
      <ToolbarHeader title="Scan" StartIcon={ArrowBack} onStartButtonClick={() => navigate(-1)} />
    </>
  )
}