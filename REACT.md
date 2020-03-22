# Create-React-App

```yarn create react-app *name*```


# Frontend Libraries

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


***
### Styled Components
[Documentation](https://styled-components.com/docs)  

```yarn add styled-components```  

###### *inside component*
```javascript
import styled from 'styled-components';
```
###### *example when we can use 'as' prop*
```javascript
<Header as={HeaderText}>...</Header>
....
const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
`;
```  

###### *example passing library component into styled*
```javascript
const StyledCard = styled(Card)`
  height: 200px;
`
....
before
    <Card>
  after
    <StyledCard>
```
We passed the <Card> semantic component into our styled-component. We are now styling the <Card> component instead of some other html element.

You can style any third party library this way that takes in a className prop.
***
### Material-UI


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

history -  history gives you access to historical information about your component. You will get access to functions like push( ) (push to new url) or goBack( ) (goes back to previous location)
location -  location will give you information about the current url in your browser.
match  -  match also gives you access to information about the url. The most important thing about this prop is the ability to access url params ( /products/:id )


Axios
-----



React Context
-----




