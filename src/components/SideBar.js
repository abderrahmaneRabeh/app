import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Typography, styled, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import { grey } from "@mui/material/colors";
const Array1 = [
  {
    text: "ExportData",
    icon: <FolderCopyOutlinedIcon />,
    path: "/export",
  },
  {
    text: "BarChart",
    icon: <EqualizerOutlinedIcon />,
    path: "/data",
  },
  {
    text: "PieChart",
    icon: <PieChartOutlineOutlinedIcon />,
    path: "/piechart",
  },
];

const Array2 = [
  {
    text: "Rapport",
    icon: <SaveOutlinedIcon />,
    path: "/rapport",
  },
  {
    text: "Calendar",
    icon: <EditCalendarOutlinedIcon />,
    path: "/calendar",
  },
];

const Array3 = [
  {
    text: "FAQ",
    icon: <InfoOutlinedIcon />,
    path: "/about",
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export default function SideBar({ open, handleDrawerClose }) {
  let Location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 40,
          height: open ? 88 : 40,
          my: 1,
          border: "1px solid gray",
          transition: "0.3s",
        }}
        alt="Ciment du maroc"
        src="https://media.licdn.com/dms/image/C4D05AQGp5vIEkqAdaw/videocover-low/0/1647881069550?e=2147483647&v=beta&t=huvcA8w9a-Sxw_uG_B4Qb_14PeeC2c32tivPrZG5Tts"
      />
      <Typography
        align="center"
        sx={{
          fontSize: open ? 17 : 0,
          transition: "0.3s",
          color: theme.palette.info,
        }}
      >
        Ciment du Maroc
      </Typography>

      <Divider />
      <List>
        {[
          {
            text: "Home",
            icon: <HomeOutlinedIcon />,
            path: "/",
          },
        ].map((element) => (
          <ListItem
            key={element.path}
            disablePadding
            sx={{
              display: "block",
              bgcolor:
                Location.pathname === element.path
                  ? theme.palette.mode === "dark"
                    ? grey[800]
                    : grey[200]
                  : null,
            }}
          >
            <ListItemButton
              onClick={() => navigate(element.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {element.icon}
              </ListItemIcon>
              <ListItemText
                primary={element.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {Array1.map((element) => (
          <ListItem
            key={element.path}
            disablePadding
            sx={{
              display: "block",
              bgcolor:
                Location.pathname === element.path
                  ? theme.palette.mode === "dark"
                    ? grey[800]
                    : grey[200]
                  : null,
            }}
          >
            <ListItemButton
              onClick={() => navigate(element.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {element.icon}
              </ListItemIcon>
              <ListItemText
                primary={element.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((element) => (
          <ListItem key={element.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(element.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  Location.pathname === element.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[200]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {element.icon}
              </ListItemIcon>
              <ListItemText
                primary={element.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((element) => (
          <ListItem key={element.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => navigate(element.path)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  Location.pathname === element.path
                    ? theme.palette.mode === "dark"
                      ? grey[800]
                      : grey[200]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {element.icon}
              </ListItemIcon>
              <ListItemText
                primary={element.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
