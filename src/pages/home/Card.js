import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import BarsDataset from "./ChartMesure";

export default function RecipeReviewCard({ mesure }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "10px",
        padding: "10px",
      }}
    >
      {mesure.map((mesure, index) => (
        <Card key={mesure.nom} sx={{ maxWidth: 355, margin: "5px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {mesure.nom.length > 3
                  ? mesure.nom.substring(0, 2)
                  : mesure.nom}
              </Avatar>
            }
            title={mesure.nom}
            subheader={mesure.valeurs[0]["temps"]}
          />
          <div style={{ display: "flex", justifyContent: "center", padding: "10px"}}>
            <BarsDataset mesure={mesure} />
          </div>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {mesure.valeurs[0]["details"]}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
