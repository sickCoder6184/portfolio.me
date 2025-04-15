import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/fonts.css';

const About = () => {
  const skills = {
    "Frontend": ["React.js", "Next.js", "HTML5", "JavaScript"],
    "Backend": ["Java", "Spring Boot", "Node.js", "REST APIs"],
    "Database": ["MongoDB", "MySQL"],
    "Tools": ["Git", "VS Code", "IntelliJ IDEA", "Postman"]
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1,
          objectFit: 'cover',
          filter: 'brightness(0.3)',
        }}
      >
        <source src="/videos/AboutVideo.mp4" type="video/mp4" />
      </Box>

      <Container>
        <Box sx={{ py: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <Box sx={{ position: 'relative' }}>
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                    <Box
                      component="img"
                      src="/images/about.png"
                      alt="Preyanshu Singh Dhapola"
                      sx={{
                        width: '100%',
                        maxWidth: 500,
                        height: 'auto',
                        borderRadius: '22px',
                        filter: 'contrast(1.1) brightness(1.1)',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                        position: 'relative',
                        zIndex: 1,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -10,
                          left: -10,
                          right: -10,
                          bottom: -10,
                          border: '100px solid rgb(255, 255, 255)', // Frame outline
                          borderRadius: '16px',
                          zIndex: 0,
                        },
                      }}
                    />
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <motion.h2
                  whileHover={{ scale: 1.05, textShadow: '0 0 8px #fff' }}
                  transition={{ duration: 0.4 }}
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '1rem',
                  }}
                >
                  About Me
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    fontFamily: 'Manrope',
                    color: '#e0e0e0',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    marginBottom: '1.5rem',
                  }}
                >
                  I’m a final-year Computer Science Engineering student at Chandigarh University with a strong foundation in DSA and full-stack development. I love building real-world projects using React, Spring Boot, MongoDB and more.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{
                    fontFamily: 'Manrope',
                    color: '#d0d0d0',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                  }}
                >
                  I’ve built multiple projects applying my backend/frontend knowledge and I enjoy solving challenges, learning tech deeply, and delivering polished user experiences.
                </motion.p>
              </motion.div>
            </Grid>
          </Grid>

          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '2.2rem',
              fontWeight: 600,
              color: 'white',
              marginTop: '4rem',
              marginBottom: '2rem',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <motion.span
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 10px #00f2fe',
                letterSpacing: '2px',
              }}
              transition={{ duration: 0.4 }}
            >
              Skills & Technologies
            </motion.span>
          </motion.h3>

          <Grid container spacing={3}>
            {Object.entries(skills).map(([category, skillList], index) => (
              <Grid item xs={12} sm={6} md={3} key={category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontFamily: 'Space Grotesk',
                        textAlign: 'center',
                        pb: 1,
                        borderBottom: '2px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      {category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      {skillList.map((skill) => (
                        <motion.div key={skill} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                          <Paper
                            sx={{
                              p: 1.2,
                              textAlign: 'center',
                              fontFamily: 'Roboto Mono',
                              fontSize: '0.95rem',
                              background: 'rgba(255,255,255,0.04)',
                              color: 'white',
                              border: '1px solid rgba(255,255,255, 0.1)',
                              borderRadius: '10px',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                background: 'rgba(0,242,254,0.08)',
                              }
                            }}
                          >
                            {skill}
                          </Paper>
                        </motion.div>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
