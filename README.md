## Arasaka Real Estate
- a real estate web application where users can browse and purchase property online.

## Link to Frontend
https://arasaka-real-estate.vercel.app/

## Basic Information.
- As a user of the application, you will be able to do the following:
   - A user can view and browse through  various property listings.
   - A user can sign up and log in to the application.
   - A user can filter through various categories of property listings.
   - A user can purchase property or cancel a purchase.

## Tecnologies & Languages

- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby on Rails Framework](https://rubyonrails.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://v2.tailwindcss.com/docs/installation)

# Installation and Setup

Clone the repository below

```
git clone https://github.com/anthonykimani/arasaka-real-estate.git
```

### Install required Dependencies

    - run ` bundle install ` to install ruby dependencies
    - run ` npm install --prefix client ` to install node dependencies

## Running the application

```bash
$ rails db:migrate db:seed
```
 Open Terminal and type
To run the api 
```
$ rails server
```

 then type
To run the client server
```
$ npm start --prefix client
```

## The following endpoints will be available:
- The base url is `http://localhost:3000/` you can then add the below endpoints i.e
      - http://localhost:3000/purchases
      
## Endpoints Available
```
- Below are a list of available endpoints in the application.This are the endpoints that our web and mobile applications are     going to consume.
- The images below show how you can access the specific endpoints listed  below.
```
      
| Method | Endpoint                             | Description                           |
| ------ | -------------------------------      | ------------------------------------- |
| GET    | http://localhost:3000/properties     | return a list of properties           | 
| GET    | http://localhost:3000/properties/:id | show a specific property              | 
| POST   | http://localhost:3000/properties     | create a property                     | 
| DELETE | http://localhost:3000/properties/:id | delete a property                     |
| UPDATE | http://localhost:3000/properties/:id | update a property                     | 
| GET    | http://localhost:3000/users          | return a list of users                | 
| GET    | http://localhost:3000/users/:id      | show a specific user                  | 
| POST   | http://localhost:3000/users          | create a user                         | 
| DELETE | http://localhost:3000/users/:id      | delete a user                         |
| UPDATE | http://localhost:3000/users/:id      | update a user                         | 
| GET    | http://localhost:3000/purchases      | return a list of purchases            | 
| GET    | http://localhost:3000/purchases/:id  | show a specific purchases             | 
| POST   | http://localhost:3000/purchases      | create a purchase                     | 
| DELETE | http://localhost:3000/purchases/:id  | delete a purchase                     |
| UPDATE | http://localhost:3000/purchases/:id  | update a purchase                     | 

