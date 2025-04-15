import { Container, Grid, Typography, Card, CardContent, CardMedia, CardActions, Button, Chip, Box } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Health Care WebApp",
      description: "A comprehensive health tracking app with to-do list, water tracker, and GoogleAuth.",
      technologies: ["Next.js", "MongoDB", "GoogleAuth"],
      image: "/images/health-optima.png",
      github: "https://github.com/dipesh2508/health-optima",
      live: "https://healthoptima.in/",
      achievements: ["IEEE Paper Publication", "Implemented Google OAuth"]
    },
    {
      id: 2,
      title: "Speech Compression System",
      description: "Next-gen speech compression using LPC & DWT for intelligent audio reduction.",
      technologies: ["React", "Firebase", "LPC", "DWT"],
      image: "/images/speech-compression.png",
      github: "https://github.com/sickCoder6184/speech-compression-frontend",
      live: "https://speechcmpression.netlify.app",
      achievements: ["Innovative Audio Processing", "Efficient Compression Algorithm"]
    },
    {
      id: 3,
      title: "Blog Application",
      description: "CRUD blog platform with users, posts, comments, categories, pagination & search.",
      technologies: ["Spring Boot", "MySQL", "REST API"],
      image: "/images/blog-app.png",
      github: "https://github.com/sickCoder6184/BlogApplicationApp",
      achievements: ["100% Test Coverage", "Optimized Database Queries"]
    }
  ];

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* 🔹 Background Video */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
          filter: 'blur(3px) brightness(0.4)',
        }}
      >
        <source src="/videos/projectVideo.mp4" type="video/mp4" />
      </Box>

      {/* 🔹 Vignette overlay */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)',
          zIndex: -1,
        }}
      />

      {/* 🔹 Projects Content */}
      <Container sx={{ py: 10, position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ color: '#fff', fontWeight: 700 }}
          >
            My Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card sx={{ borderRadius: 3, backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255,255,255,0.07)', color: '#fff', boxShadow: 6 }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>{project.title}</Typography>
                    <Typography variant="body2" paragraph>{project.description}</Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.technologies.map((tech) => (
                        <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                      ))}
                    </Box>

                    {project.achievements.map((ach, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{ color: 'success.main', display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        • {ach}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<GitHub />} href={project.github} target="_blank" sx={{ color: '#fff' }}>
                      GitHub
                    </Button>
                    {project.live && (
                      <Button size="small" startIcon={<Launch />} href={project.live} target="_blank" sx={{ color: '#fff' }}>
                        Live Demo
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
