import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/material";

export default function About() {
  return (
    <Stack direction="column" gap={2}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Qui est Abderrahmane Rabeh ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Abderrahmane Rabeh est un développeur Full Stack basé à Safi, au
            Maroc. Il se spécialise dans le développement d'applications web qui
            affichent des éléments de données chimiques tels que des cartes et
            des graphiques. De plus, ses applications ont la capacité de
            sauvegarder ces données au format Excel.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            Quels sont les fonctionnalités principales du projet ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le projet pour l'entreprise Ciment du Maroc comprend les
            fonctionnalités suivantes :
            <ul>
              <li>
                Affichage d'éléments de données chimiques sous forme de cartes
                et de graphiques.
              </li>
              <li>
                Capacité de sauvegarder les données dans un fichier Excel.
              </li>
              <li>
                Génération de rapports sur la progression de tous les éléments
                au cours des 30 dernières minutes, 1 heure et 24 heures.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>
            Quelles sont les technologies utilisées côté frontend ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le frontend du projet utilise les technologies suivantes :
            <ul>
              <li>React</li>
              <li>Material-UI</li>
              <li>CSS</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>
            Quelles sont les technologies utilisées côté backend ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le backend du projet utilise les technologies suivantes :
            <ul>
              <li>JSON Server</li>
              <li>Node Express</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>
            Comment est intégré le calendrier dans l'application ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le calendrier est intégré dans l'application en utilisant la
            bibliothèque @fullcalendar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography>
            Comment les données sont-elles exportées au format XLSX ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Les données sont exportées au format XLSX en utilisant une
            bibliothèque appropriée pour la génération de fichiers Excel dans
            l'environnement JavaScript.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
