import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Slide,
} from "@mui/material";
import { Menu, DarkMode, LightMode } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAppBar, setShowAppBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Projects", path: "/projects" },
    { text: "Contact", path: "/contact" },
  ];

  const MotionLink = motion(Link);

  // Auto-hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowAppBar(false); // scroll down
      } else {
        setShowAppBar(true); // scroll up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Slide in={showAppBar}>
      <AppBar
        position="sticky"
        color="default"
        sx={{ background: darkMode ? "#121212" : "#fff" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo to the left */}
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "RedBrightDemo",
                fontSize: "2rem",
                color: darkMode ? "white" : "black",
                transition: "color 0.3s",
                "&:hover": {
                  color: darkMode ? "white" : "#a020f0",
                },
              }}
            >
              PSD
            </Typography>
          </Link>

          {/* Right-side controls */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>

            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <Menu />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={mobileOpen}
                  onClose={() => setMobileOpen(false)}
                >
                  <List sx={{ width: 250 }}>
                    {menuItems.map((item) => (
                      <ListItem
                        button
                        key={item.text}
                        component={Link}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                      >
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {menuItems.map((item) => (
                  <MotionLink
                    key={item.text}
                    to={item.path}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Typography>{item.text}</Typography>
                  </MotionLink>
                ))}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
