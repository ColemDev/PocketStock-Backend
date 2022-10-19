# **Pocket Stock Project: Backend**
 
## - Hosted Version -
 
### gitHub Repository
 
https://github.com/ColemDev/PocketStock-Backend
 
### Hosted Server
 
https://super-pocket-stock.herokuapp.com/api
 
## - Summary -
 
This repo is an api which showcases back end coding using modules such as express, mongodb. The api is connected to a supplied database on mongodb compass for the purpose of testing.

 The database comprises 3 different datasets; components, products  and orders. The components and products are interconnected on the backend via a mongoose schema and the rest are connected via frontend components.
 
## - Setup -
 
###Minimum Versions (dependencies?)
 
node : 14.16.0 -> v17.8.0
mongodb: 4.10.0 -> v5.0.13
mongoDB Compass: v1.33.1
 
To set up this api you will first need to clone from the provided github repo at the top of this readme.
 
### HTTPS:
 
```
git clone https://github.com/ColemDev/PocketStock-Backend
```
 
### SSL:
 
```
git clone git@github.com:ColemDev/PocketStock-Backend.git
```
 
### Git CLI:
 
```
gh repo clone ColemDev/PocketStock-Backend
```
 
After cloning, you will need to install the dependencies. 
 
cd into your main project directory and type the following into the terminal
```
npm i
```
Once the dependencies are installed, you will need to connect it to a mongoDB database so that it has data to access: 
 
Configure the MongoDB Database
To create a MongoDB cluster in Atlas, follow these steps.
Head over to https://www.mongodb.com/cloud/atlas/register and create your account, or sign in here if you already have one one https://account.mongodb.com/account/login
On the project page, click on the “Create” button.
Choose Free Shared Cluster
Choose your cloud provider and region.
Click on “Create cluster.”
It will ask you the username and the password, so fill those in.
Then it will ask you for your ip address
Click finish and close.
It will take some time for our cluster to finish being set up so while you are waiting open up your code editor and create a file called .env in the project folder you downloaded the backend into.
Back on the mongodb site, navigate to the cluster home page and click the “connect” button. This will take you to the “connect to cluster” window.
Before you can continue you’ll need to download mongodb compass if you don’t have it installed already
Click on the following link and follow the instructions to install mongodb compass then return to this README to continue the set up. https://www.mongodb.com/docs/compass/current/install/#std-label-download-install
Now that you have compass, on the  “connect to cluster” window still open on your browser, Click MongoDB Compass, and it will something like the following string: 
mongodb+srv://<username>:<password>@cluster0.zyxwv.mongodb.net/testDatabase
Replace the bits on your string that match where this tutorial has put “<username>” and “<password>” with the username and password you chose when setting up your cluster.
Copy this new string and go back to your .env file.
In your .env file type the following:
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.zyxwv.mongodb.net/testDatabase
Now that your string is in the .env file, open mongodb compass
Create a new connection and paste your string there too.
Click connect.
 
## Testing
 
You can now begin testing the api using jest. To do so:
cd into your  __tests__ folder
Type “npm run test” 
 
If you wish to test the api with a separate app such as insomnia, the default port is 9090.

Send the request to localhost:9090/api/<your endpoint of choice>
 
 
Thanks for looking, I hope you like the api!
 
