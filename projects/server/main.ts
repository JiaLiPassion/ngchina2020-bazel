import express from 'express';

import {User} from '../shared/user';

const app: express.Express = express();

// CORSの許可
app.use((req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const router: express.Router = express.Router();
router.get('/api/getTest', (req: express.Request, res: express.Response) => {
  const user: User = {account: 'test'};
  res.send(user);
});
app.use(router);

app.listen(3000, () => {console.log('Example app listening on port 3000!')});