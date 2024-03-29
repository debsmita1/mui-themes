import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "MUI-v5/AppBar",
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta;

export const ButtonAppBar: StoryObj = {
  render: (args) => (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            {...args}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" {...args}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  ),
};
