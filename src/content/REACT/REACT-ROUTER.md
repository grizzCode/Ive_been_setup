# React Router

```yarn add react-router-dom```

###### *index.js*

```javascript
import { BrowserRouter, } from 'react-router-dom';  


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```
###### *App.js*

```javascript
import { Route, Switch } from 'react-router-dom'  


   <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/XXX" component={XXX} />
    <Route path="/YYY/:id" component={YYY} />
    ...
    <Route component={NoMatch} />
  </Switch>
```

###### *Link*

```javascript
import { Link } from 'react-router-dom'  

  <Link to="/">
    <Button color="black">Home</Button>
  </Link>
```  
#### HISTORY FUNCTIONS
**push()**
```javascript
this.props.history.push('/')
```
Push to new router route passed in as argument.  

**goBack()**
```javascript
this.props.history.goBack()
```  
Goes back to previous location.

**match()**
```javascript
this.props.history.match.params.id
```  
The most important thing about this prop is the ability to access url params ( Route: /products/:id ) Note that calling ':id' in the route must match the 'id' in .match.params.**id**

**location()**  

Location will give you information about the current url in your browser.