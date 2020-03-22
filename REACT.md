# Create-React-App
-----
```yarn create react-app *name*```


# Frontend Libraries
-----
### Ant Design

[Setup Documentation](https://ant.design/docs/react/use-with-create-react-app)

[Components](https://ant.design/components/button/)  

```yarn add antd```    

###### *index.js*
```import 'antd/dist/antd.css'```  

###### *inside component*
```
import { XXX } from 'antd';
import { XXX } from '@ant-design/icons'
```   
***
### Semantic-UI  

[Setup Documentation](https://react.semantic-ui.com/usage)

[Components](https://react.semantic-ui.com/collections/grid/)   
  
```yarn add semantic-ui-react semantic-ui-css```

###### *index.js*
```import "semantic-ui-css/semantic.min.css";```  

###### *inside component*
```import { XXX } from 'semantic-ui-react';```



### Styled Components

** styling something that is an as already...**
### Material-UI


# React Router
-----
```yarn add react-router-dom```

###### *index.js*
```
import { BrowserRouter, } from 'react-router-dom';  


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```
###### *App.js*

```
import { Route, Switch } from 'react-router-dom'  


   <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/XXX" component={XXX} />
    ...
    <Route component={NoMatch} />
  </Switch>
```

###### *Link*

```
import { Link } from 'react-router-dom'  

  <Link to="/">
    <Button color="black">Home</Button>
  </Link>
```

history -  history gives you access to historical information about your component. You will get access to functions like push( ) (push to new url) or goBack( ) (goes back to previous location)
location -  location will give you information about the current url in your browser.
match  -  match also gives you access to information about the url. The most important thing about this prop is the ability to access url params ( /products/:id )


# Axios
-----



# React Context
-----




