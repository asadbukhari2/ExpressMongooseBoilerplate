const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const useragent = require('express-useragent');
const router = require('./routes');
const morgan = require('morgan');
const { mongo_string } = require('./configs');

mongoose.Promise = global.Promise;
mongoose
  .connect(mongo_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.log(err));

process.title = 'AI_SAAS_BACKEND';

const app = express();
app.set('trust proxy', 1);
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(useragent.express());
app.use(morgan('tiny'));

app.use('/api', router);

app.get('/health', (req, res) => {
  let mongo_db = `MongoDB connection state is ${mongoose.connection.readyState}`;
  res.status(200).send({ mongo_db });
});

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

app.listen(process.env.PORT ?? 4004);
console.log(`--------------------------------------------------------------`);
console.log(`Server started on port ${process.env.PORT}`);
console.log(`--------------------------------------------------------------`);
