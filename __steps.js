/***
 * -------------------------
 * Mongoes Connection
 * --------------------------
 * 1) Create Account;
 * 2) Create user with id passsword
 * 3) Whitelist ip address
 * 4) database>connect>driver>node> sell all code
 * 5) Change in uri id and password
 * 6)create ----post('/users/:id',(req,res)=>{})
 * 7) app.post
 * 8) make the fuction async to use await in the function
 * 9) make sure that you use the express.json middleware
 * 10) access data from the body : const user=req.body
 * 11) access data from the body : const result =usercollection.insertone(user)
 * 12) res.send result
 * 
 * 
 * 
 * 
 * ------------------------------
 * client
 * 1) create fetch
 * 2) add second perameter
 * 3)prodite method : "POST"
 * 4) ADD headers : {'content-type':'application/json'}
 * 5) add body : JSON.stringfy(user)
 * 
 */


/****
 * -----------------------
 * Read Many
 * -------------------------
 * 1) Create a cursor = userCollection.find();
 * 2) const result= awair cursor.toarray();
 * 3) 
 */

/**
 * ------------------------
 * Delete
 * -------------------------
 * 1) const app.delete('/users/:id',(req,res)=>{})
 * 2) specify the uniq object id to delete the right user;
 * 3) const query={_id:newObjectID(id)}
 * 4) const result =usercollection.deleteone(user)
 * 5)
 * 
 * 
 * ----------------------
 * client
 * ----------------------
 * 1) create dynamic id with url
 * 2) method the delete method
 * 
 */