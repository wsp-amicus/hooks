cd ../salad;
git pull;
# # npm install --only=prod;
# # npm run build;
sudo kill $(sudo lsof -t -i :5555);
sudo kill $(sudo lsof -t -i :5556);
PORT=5555 NODE_ENV='production' npm run backend:node & \n;