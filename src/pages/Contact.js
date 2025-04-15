import { useState, useRef } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  IconButton,
  Tooltip
} from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_ojhepit',
        'template_jr3ps6s',
        form.current,
        'kjtARSnYBlU9BSppY'
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'fixed',
          top: 20,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          objectFit: ' cover',
          filter: 'blur(2px) brightness(0.3)'
        }}
      >
        <source src="/videos/contaactVideo.mp4" type="video/mp4" />
      </Box>

      <Container sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ color: 'white', textAlign: 'center' }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px'
                }}
              >
                <form ref={form} onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="user_name"
                    margin="normal"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    sx={{
                      input: { color: 'white' },
                      label: { color: 'white' }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="user_email"
                    margin="normal"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    sx={{
                      input: { color: 'white' },
                      label: { color: 'white' }
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    sx={{
                      input: { color: 'white' },
                      label: { color: 'white' }
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ mt: 2 }}
                    fullWidth
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Icons + Footer */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                  Connect with Me
                </Typography>

                <Box
                  sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}
                >
                  <Tooltip title="Email">
                    <IconButton
                      href="mailto:preyanshudhapola6184@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Email sx={{ color: 'white', fontSize: 30 }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="GitHub">
                    <IconButton
                      href="https://github.com/sickCoder6184"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub sx={{ color: 'white', fontSize: 30 }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="LinkedIn">
                    <IconButton
                      href="https://www.linkedin.com/in/preyanshu-d-852019231"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedIn sx={{ color: 'white', fontSize: 30 }} />
                    </IconButton>
                  </Tooltip>
                </Box>

               
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
