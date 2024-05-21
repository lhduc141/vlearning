import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation, useNavigate } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const ToggleMenu = () => {
  const dataNav = [
    {
      title: "Users",
      children: [
        {
          title: "List",
          path: "/admin/users/list",
          icon: <GroupIcon />,
        },
        {
          title: "Create",
          path: "/admin/users/create",
          icon: <PersonAddIcon />,
        },
      ],
    },
    {
      title: "Courses",
      children: [
        {
          title: "List",
          path: "/admin/courses/list",
          icon: <FormatListBulletedIcon />,
        },
        {
          title: "Create",
          path: "/admin/courses/create",
          icon: <PlaylistAddIcon />,
        },
      ],
    },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box>
      {dataNav.map((section, index) => (
        <Accordion
          key={index}
          sx={{ backgroundColor: "#1F2937", color: "white", borderRadius: 1 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            {section.title === "Users" ? (
              <PeopleIcon />
            ) : (
              <PlayCircleOutlineIcon />
            )}
            <Typography ml={2}>{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {section.children.map((child, idx) => (
                <ListItem
                  button
                  key={idx}
                  onClick={() => handleNavigation(child.path)}
                  sx={{
                    background: pathname.includes(child.path)
                      ? "orange"
                      : "transparent",
                    margin: 0,
                    "&:hover": {
                      background: "orange",
                    },
                    borderRadius: 1,
                  }}
                >
                  {child.icon}
                  <ListItemText
                    primary={child.title}
                    sx={{ ml: 1, fontWeight: 600 }}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const AdminSidebar = () => {
  return (
    <div>
      {/* logo */}
  <div className="bg-white">
  <img
        src="https://demo2.cybersoft.edu.vn/logo.png"
        className="h-[70px] object-cover mx-auto p-3"
        alt="logo"
      />
  </div>
      {/* nav use mui ui*/}
      <Box>
        <ToggleMenu />
      </Box>
    </div>
  );
};

export default AdminSidebar;
