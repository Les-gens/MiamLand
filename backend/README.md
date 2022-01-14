# MiamLand Backend

This is how work our backend of Miamland

## Launching the app

Install dependencies with `npm i` and launch backend with  `npm run server`
(Please note that you will need a postgresql database and change the `.env.example` file to `.env` with your database credentials)

## Database

You can see, with the image below, how look like our database.
![Free Diagram - QuickDBD - Google Chrome](https://user-images.githubusercontent.com/50270157/149494619-2436e58c-e43c-4af3-ae61-13c440aeb91e.jpg)


## Routes

To call the different request, you need to know the differents routes.
The base of the URL will be `http://localhost:8000/api/`, if you launch the backend on your local desktop.

### User
method: GET
url: `/users`
return: all the users

method: GET
url: `/user/:id`
params: id => The user id
return: One user, or nothing

method: PUT,
url: `/api/user/:id`
params: id => The user id
body: username and password
return: updateUser

method: DELETE
url: `/api/user/:id`
params: id => The user id
return: The user who has been deleted

### Recipe

### Step

### Quantity

### Ingredient

### UserIngredient

### Rating
