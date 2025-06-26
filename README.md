Menu 
is a restaurant menu api with users having the ability to leave comments on their favorite dish.

The base URl `http://localhost3000/api`

Routes


### users
- `GET /api/users` - Generates all of the users
- `POST /api/users` -Create a new user
- `PATCH /api/users/:id`- Find an user by their Id and update their info
- `DELETE /api/users/:id`- Delete an user by using their Id to find and delete

examples of an user
{
"_id": "685621470e979be580569afa",
    "username": "Kaiya",
    "email": "missbaby1234@gmail.com",
    "password": "uryukoandpeanut21",
    "created_at": "2025-06-21T03:04:39.569Z",
    "updated_At": "2025-06-26T00:49:43.060Z",
    "__v": 0
}
### comments
- `GET /api/comments`-Generates all of the users
- `POST /api/categories`Creae new comment
- `PATCH /api/categories/:id`- find a comment and update
- `DELETE /api/categories/:id`- delete a comment

Example of a comment
 {
    "_id": "68563971ca969ed2d52d6cb8",
    "menuId": "68563105e4b32ff7c3a95a82",
    "comment": "This food was delicious and tasty",
    "rating": 5,
    "userId": "685621470e979be580569afa",
    "created_at": "2025-06-21T04:47:45.519Z",
    "updated_At": "2025-06-21T04:47:45.519Z",
    "__v": 0
  }

### menus
- `GET /api/menus`- get all of dishes
- `POST /api/menus` create a dish
- `PATCH /api/menus/:id`- find a dish by Id and update
- `DELETE /api/menus/:id`- find a dish by Id and delete

 example of a dish from Menu

{
    "_id": "685c9f363a0fa96db30ae6b4",
    "name": "Jerk Chicken and Potatoes",
    "price": 14.99,
    "created_at": "2025-06-26T01:15:34.412Z",
    "updated_At": "2025-06-26T01:15:34.412Z",
    "__v": 0
  },


  ERROR
  TRY/CATCH method used to catch errors 
  Code status (400,200,500) to display proper output or error outputs

  TESTED
  with thunderClient.
Can be checked using Postman