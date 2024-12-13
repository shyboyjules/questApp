const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.post('/api/user/register', (req, res) => {
  const { firstName, lastName, age, phoneNumber, email, password, confirmPassword } = req.body;

  res.json({ message: 'User registered successfully' });
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});