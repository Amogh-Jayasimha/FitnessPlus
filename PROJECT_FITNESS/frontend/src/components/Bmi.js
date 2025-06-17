import React, { useState } from 'react';
import { bmiOptions, fetchData } from '../utils/fetchData';
import { Box, Button, Stack, TextField, Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Bmi = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const bmiData = async () => {
    if (!height || !weight || isNaN(height) || isNaN(weight)) {
      alert("Enter number inputs for height and weight");
      return;
    }

    try {
      const response = await fetchData(
        `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?${new URLSearchParams({
          height: height,
          weight: weight
        })}`,
        bmiOptions
      );
      setBmi(response.bmi);
    } catch (error) {
      console.error("Error fetching BMI data:", error);
      alert("An error occurred while calculating BMI");
    }
  };

  const bmiCategory = (bmiValue) => {
    if (bmiValue < 18.5) return "Underweight";
    if (bmiValue >= 18.5 && bmiValue <= 24.99) return "Healthy Weight";
    if (bmiValue >= 25 && bmiValue <= 29.99) return "Overweight";
    return "Obese";
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          BMI Calculator
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="Height (m)"
            variant="outlined"
            fullWidth
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            type="number"
          />
          <TextField
            label="Weight (kg)"
            variant="outlined"
            fullWidth
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            type="number"
          />
<Button 
  variant="contained" 
  onClick={bmiData} 
  fullWidth
  sx={{ backgroundColor: '#FF0000', '&:hover': { backgroundColor: '#CC0000' } }}
>
  Calculate BMI
</Button>

        </Stack>
        <Box mt={4}>
          {!bmi && (
            <Typography variant="body1" align="center">
              Enter your height and weight to calculate BMI
            </Typography>
          )}
          {bmi && (
            <Typography variant="body1" align="center">
              Your BMI is {Math.round(bmi * 100) / 100}, indicating your weight is in the{' '}
              <strong>{bmiCategory(bmi)}</strong> category for adults of your height.
            </Typography>
          )}
        </Box>

        <Box mt={6}>
          <Typography variant="h5" gutterBottom>
            What is BMI?
          </Typography>
          <Typography variant="body1" paragraph>
            Body Mass Index (BMI) is a simple measure that uses your height and weight to work out if your weight is healthy. It's used as a screening tool to identify possible weight problems for adults.
          </Typography>

          <Typography variant="h5" gutterBottom>
            BMI Categories
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>BMI Range</TableCell>
                  <TableCell>Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Below 18.5</TableCell>
                  <TableCell>Underweight</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>18.5 - 24.9</TableCell>
                  <TableCell>Healthy Weight</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>25.0 - 29.9</TableCell>
                  <TableCell>Overweight</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>30.0 and above</TableCell>
                  <TableCell>Obese</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h5" gutterBottom mt={4}>
            Limitations of BMI
          </Typography>
          <Typography variant="body1" paragraph>
            While BMI is a useful tool for most people, it does have limitations:
          </Typography>
          <ul>
            <li>It may overestimate body fat in athletes and others with very muscular builds</li>
            <li>It may underestimate body fat in older persons and others who have lost muscle mass</li>
            <li>It doesn't account for factors like body composition, age, gender, and ethnicity</li>
          </ul>

          <Typography variant="body1" paragraph>
            Always consult with a healthcare professional for a comprehensive health assessment.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Bmi;
