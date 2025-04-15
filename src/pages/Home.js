import { Box, Typography, Container, Button } from "@mui/material";
import { GitHub, LinkedIn, Code } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const bios = [
  "I’m Preyanshu Singh Dhapola, a CSE student at Chandigarh University passionate about DSA and problem-solving. I actively solve challenges on LeetCode and HackerRank. I’ve also worked on projects like a health care web app and campus navigation system, utilizing ReactJS, Spring Boot, and MongoDB.",
  "A CSE student at Chandigarh University with a strong focus on DSA and web development. I’ve built a health tracker and campus navigation app, gaining expertise in Java, Spring Boot, and MongoDB. I’m continuously expanding my skills in both coding and real-world application development.",
  "I’m Preyanshu, a Computer Science Engineering student driven by a passion for DSA and competitive programming. I enjoy translating algorithmic solutions into real-world projects like a health care web app and an Android navigation tool using ReactJS and Spring Boot.",
  "As a CSE student at Chandigarh University, I thrive on solving DSA problems on coding platforms like LeetCode. I’ve also developed multiple projects, including a blog app and health tracker, using ReactJS, NextJS, and MongoDB, focusing on both backend and frontend solutions.",
];

const getRandomIndex = (exclude) => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * bios.length);
  } while (newIndex === exclude);
  return newIndex;
};

const Home = () => {
  const name = "Preyanshu  Singh  Dhapola";
  const [bioIndex, setBioIndex] = useState(0);

  const shuffleBio = () => {
    const newIndex = getRandomIndex(bioIndex);
    setBioIndex(newIndex);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          objectFit: "cover",
          filter: "brightness(0.3)",
        }}
      >
        <source src="/videos/HomePageVideo.mp4" type="video/mp4" />
      </Box>

      <Container sx={{ height: "100%", position: "relative" }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 3,
            color: "common.white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}
            >
              Hi, I'm{" "}
              <Box
                component="span"
                sx={{
                  color: "#2196f3",
                  fontFamily: "RedBrightDemo",
                  fontSize: "inherit",
                }} 
              >
                {name }
                
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Typography
              variant="h6"
              onClick={shuffleBio}
              sx={{
                cursor: "pointer",
                maxWidth: "800px",
                lineHeight: 1.6,
                px: 2,
                "&:hover": {
                  color: "primary.light",
                },
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={bioIndex}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                >
                  {bios[bioIndex]}
                </motion.div>
              </AnimatePresence>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Box
              sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 4 }}
            >
              {[
                { icon: <GitHub />, href: "https://github.com/sickCoder6184" },
                {
                  icon: <LinkedIn />,
                  href: "https://www.linkedin.com/in/preyanshu-d-852019231",
                },
                { icon: <Code />, href: "https://leetcode.com/u/SickCoder/" },
              ].map(({ icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ color: "white" }}
                >
                  {icon}
                </motion.a>
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                size="large"
              >
                View My Work
              </Button>
              <Button
                component={Link}
                to="/about"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "common.white",
                  color: "common.white",
                  "&:hover": {
                    borderColor: "common.white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                About Me
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
