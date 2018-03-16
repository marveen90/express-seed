# Request
```js
// Access parameters in url
req.params 
// Access parameters in body
req.body
// Access query parameters after ?
req.query
```
# Mongoose
## New Model
```js
let user = new User({ email: 'me.feghhi@gmail.com', password: 'dingdong' });
```
## Save Model
```js
user.save()
  .then(() => {
    res.send({ success: true });
  })
  .catch(error => { 
    res.send(error);
  });
```
## Find All Models
```js
User.find()
  .then(doc => {

  })
```

# HandleBars
## Render a View
```js
res.render('view_name');
```

