# SoftUni Practice Server

## Usage

This is **REST service**, created for educational purposes. To execute it, open a command prompt and run `node server.js`.

```
> cd server
> node server.js
```

Note that changes to the data **will not be persisted**! All operations happen in memory and will be wiped when the service is restarted.

## Base URL

The Base URL for the API is: `http://localhost:3030/jsonstore`

The documentation below assumes you are pre-pending the Base URL to the endpoints in order to make requests.

# Endpoints: cars

- `/cars` -- get car list/ create car;
- `/cars/{carId}` -- get cars/update cars/ delete cars by provided id;;

## Get cars list

Send a `GET` request to `/cars`. The service will respond with an array of car objects.

### Success Response:

Code: 200 OK

Content:

```
[
  {
        "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "model": String,
        "year": Number,
        "fuel": String,
        "engine": String,
        "color": String,
        "mileage": Number,
        "imageUrl": String,
        "brand": String,
        "_createdOn": 1679578986904,
        "_id": "4be91d66-a99c-4d99-8a80-e08779565967"

  }, ...
]
```

## Create a new car

Create a new car by sending a `POST` request to `/cars` with properties `model` , `brand`, `year`, `fuel`, `engine`, `color`, `miliage`and `imageUrl`. The service will respond with an object, containing newly created car.

### Body

```
{
         "model": String,
        "year": Number,
        "fuel": String,
        "engine": String,
        "color": String,
        "mileage": Number,
        "imageUrl": String,
        "brand": String,
}
```

### Success Response:

Code: 200 OK

Content:

```
{
    "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "model": String,
        "year": Number,
        "fuel": String,
        "engine": String,
        "color": String,
        "mileage": Number,
        "imageUrl": String,
        "brand": String,
        "_createdOn": 1679578986904,
        "_id": "4be91d66-a99c-4d99-8a80-e08779565967"
}
```

## Update car by provided carId

Update an existing car by sending a `PUT` request to `/cars/{carId}` with properties `model` , `brand`, `year`, `fuel`, `engine`, `color`, `miliage`and `imageUrl`. The service will respond with an object, containing newly updated car.

### Body

```
{
     
        "model": String,
        "year": Number,
        "fuel": String,
        "engine": String,
        "color": String,
        "mileage": Number,
        "imageUrl": String,
        "brand": String,
        
   
  
}
```

### Success Response:

Code: 200 OK

Content:

```
{
     "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        "model": String,
        "year": Number,
        "fuel": String,
        "engine": String,
        "color": String,
        "mileage": Number,
        "imageUrl": String,
        "brand": String,
        "_createdOn": 1679578986904,
        "_id": "4be91d66-a99c-4d99-8a80-e08779565967",
        "_updatedOn": 1680361700865
}
```

