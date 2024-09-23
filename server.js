const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 3000;


const CorsOptions ={
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
}


app.use(cors(CorsOptions))
app.use(express.json())

const previous_calculations = []


  //Addition endpoint
app.post('/api/calculate/add', (req, res) => {
    try {
        const { num1, num2 } = req.body;
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
          res.status(400).json({error: 'Values must be numbers'})
        }
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
          return res.status(400).json({ error: 'Both numbers are required' });
        }
        const calculation =`${num1} + ${num2} = ${num1 + num2}`
        res.json({ result: calculation });
        previous_calculations.push(calculation)
        } catch (error) {
        res.status(400).json({ error: error.message})
    }
  });
  
  // Subtraction endpoint
app.post('/api/calculate/subtract', (req, res) => {
    try {
      const { num1, num2 } = req.body;
      if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        res.status(400).json({error: 'Values must be numbers'})
      }
      if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
        return res.status(400).json({ error: 'Both numbers are required' });
      }
      const calculation =`${num1} - ${num2} = ${num1 - num2}`
      res.json({ result: calculation });
      previous_calculations.push(calculation)
      } catch (error) {
        res.status(400).json({error: error.message});
    }
  });
  
  // Multiplication endpoint
app.post('/api/calculate/multiply', (req, res) => {
    try {
      const { num1, num2 } = req.body;
      if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        res.status(400).json({error: 'Values must be numbers'})
      }
      if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
        return res.status(400).json({ error: 'Both numbers are required' });
      }
    const calculation =`${num1} * ${num2} = ${num1 * num2}`
    res.json({ result: calculation });
    previous_calculations.push(calculation)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  });
  
  // Division endpoint
app.post('/api/calculate/divide', (req, res) => {
    try {
        const { num1, num2 } = req.body;
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
          res.status(400).json({error: 'Values must be numbers'})
        }
        if (num1 === undefined || num2 === undefined || num1 === null || num2 === null) {
          return res.status(400).json({ error: 'Both numbers are required' });
        }
        if (num2 === 0) {
          return res.status(400).json({ error: 'Division by zero is not allowed' });
        }
        const calculation =`${num1} / ${num2} = ${num1 / num2}`
        res.json({ result: calculation });
        previous_calculations.push(calculation)
        }catch (error) {
        res.status(400).json({ error: error.message});
    }
  });
  
  // Default route
app.get('/welcome', (req, res) => {
    res.send('Welcome to the Calculator API');
  });
  
  // History route
app.get('/history', (req, res) => {
    res.status(200).json({message: 'Previous Calculations',previous_calculations})
  })
  
  // Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

