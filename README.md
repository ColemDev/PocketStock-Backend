**# **Pocket Stock Project: Backend**

## - Hosted Version -

### gitHub Repository

https://github.com/ColemDev/H-and-Ms-PocketStockBackend

### Hosted Server

https://super-pocket-stock.herokuapp.com/api

## - Summary -

This repo is an api which showcases back end coding using modules such as express, mongodb. The api is connected to a supplied database on mongodb compass for the purpose of testing.  
  
The database comprises 3 different datasets; components, products  and orders. The components and products are interconnected on the backend via a mongoose schema and the rest are connected via frontend components.

## - Setup -

###Minimum Versions (dependencies?)

node : 14.16.0 -> v17.8.0

mongodb: 4.10.0 -> v5.0.13

mongoDB Compass: v1.33.1

To set up this api you will first need to clone from the provided github repo at the top of this readme.

### HTTPS:

```

git clone https://github.com/ColemDev/H-and-Ms-PocketStockBackend

```

### SSL:

```

git clone git@github.com:ColemDev/H-and-Ms-PocketStockBackend.git

```

### Git CLI:

```

gh repo clone ColemDev/H-and-Ms-PocketStockBackend

```

After cloning, you will need to install the dependencies. 

1.  cd into the “pocketstock” directory and type the following into the terminal
    

```

npm i

```

Once the dependencies are installed, you will need to connect it to a mongoDB database so that it has data to access: 

Configure the MongoDB Database

To create a MongoDB cluster in Atlas, follow these steps.

1.  Head over to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register) and create your account, or sign in here if you already have one one [https://account.mongodb.com/account/login](https://account.mongodb.com/account/login)
    
2.  On the project page, click on the “Create” button.
    
3.  Choose Free Shared Cluster
    
4.  Choose your cloud provider and region.
    
5.  Click on “Create cluster.”
    
6.  It will ask you the username and the password, so fill those in.
    
7.  Then it will ask you for your ip address
    
8.  Click finish and close.
    
9.  It will take some time for our cluster to finish being set up so while you are waiting open up your code editor and create a file called .env in the project folder you downloaded the backend into.
    
10.  Back on the mongodb site, navigate to the cluster home page and click the “connect” button. This will take you to the “connect to cluster” window.
    
11.  Before you can continue you’ll need to download mongodb compass if you don’t have it installed already
    
12.  Click on the following link and follow the instructions to install mongodb compass then return to this README to continue the set up. [https://www.mongodb.com/docs/compass/current/install/#std-label-download-install](https://www.mongodb.com/docs/compass/current/install/#std-label-download-install)
    
13.  Now that you have compass, on the  “connect to cluster” window still open on your browser, Click MongoDB Compass, and it will something like the following string: 
    

1.  mongodb+srv://<username>:<password>@cluster0.zyxwv.mongodb.net/testDatabase
    

15.  Replace the bits on your string that match where this tutorial has put “<username>” and “<password>” with the username and password you chose when setting up your cluster.
    
16.  Copy this new string and go back to your .env file.
    
17.  In your .env file type the following:
    

1.  DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.zyxwv.mongodb.net/testDatabase
    

19.  Now that your string is in the .env file, open mongodb compass
    
20.  Create a new connection and paste your string there too.
    
21.  Click connect.
    

## Testing

You can now begin testing the api using jest. To do so:

1.  cd into your  __tests__ folder
    
2.  Type “npm run test” 
    

If you wish to test the api with a separate app such as insomnia, the default port is 9090.

  
Send the request to localhost:9090/api/<your endpoint of choice>

Thanks for looking, I hope you like the api!**
