cd ../salad;
git pull;
npm install --only=prod;
sudo kill \$(sudo lsof -t -i :5555);
sudo kill \$(sudo lsof -t -i :5556);
npm run build;
../sshalert.sh;
PORT=5555 NODE_ENV='production' npm run backend:node;