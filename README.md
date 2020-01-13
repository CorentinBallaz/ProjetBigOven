# Food2Fork mobile app

# How to install

1. Clone this git

Unfortunately, the online API closed so we are using a local database. Follow the following steps for installing the DB :

1. Open a linux shell or a windows command terminal

2. In terminal, go to your MongoDB repository (something like "D:\Programmes\MongoDB\bin")

3. Copy/past and execute the following command : mongoimport --db food2forkDataBase --collection recipes --type json --jsonArray --file "insert the path to the recipes.json file, which you can find in the F2F directory in this cloned repository"

The database is set and ready to work.

Install node_modules :

1. Open a linux shell or a windows command terminal

2. In terminal, go to ".\F2F\FoodProject" (change . by your own path to the project)

3. Run npm install

4. Go to ".\F2F\FoodProject\app" (change . by your own path to the project)

5. Run npm install

# How to launch the app 

1. In the F2F directory, create a new directory called "FoodDataBase"

2. Open a linux shell or a windows command terminal

3. In terminal, go to your MongoDB repository (something like "D:\Programmes\MongoDB\bin")

4. Execute this command : mongod --dbpath ".\F2F\FoodDataBase" (change . by your own path to the FoodDataBase directory)

5. Open another linux shell or a windows command terminal

6. In this second terminal, go to ".\F2F\FoodProject"

7. Execute this command : node app.js (or "nodemon app.js")

5. Open another linux shell or a windows command terminal

6. In this third terminal, go to ".\F2F\FoodProject\app" (change . by your own path to the project)

7. Execute this command : ionic lab (if there's an issue, run npm install -g ionic)

8. Enable CORS on your browser

9. Enjoy the app :)