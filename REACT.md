# Create-React-App

```yarn create react-app *name*```


# Frontend Libraries

### Ant Design

[Setup Documentation](https://ant.design/docs/react/use-with-create-react-app)

[Components](https://ant.design/components/button/)  

```yarn add antd```    

###### *index.js*
```import 'antd/dist/antd.css'```  

###### *Use in Component*
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

###### *Use in Component*
```import { XXX } from 'semantic-ui-react';```


***
### Styled Components
[Documentation](https://styled-components.com/docs)  

```yarn add styled-components```  

###### *Use in Component*
```javascript
import styled from 'styled-components';
```
###### *Example when we can use 'as' prop*
```javascript
<Header as={HeaderText}>...</Header>
....
const HeaderText = styled.h1`
  color: white !important;
  text-align: center;
`;
```  

###### *Example passing library component into styled*
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

[Theming](https://styled-components.com/docs/advanced#theming)  
***
### Material-UI
```yarn add @material-ui/core```  

[Documentation](https://material-ui.com/getting-started/installation/) 

###### *index.js*
```javascript
import CssBaseline from '@material-ui/core/CssBaseline'  
```

###### *Use in Component*
```javascript
import XXX from '@material-ui/core/XXX';
```
Note there needs to be an individual import statement for each component because they all use separate files. 


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



# Axios
```yarn add axios```

###### *Example*

```javascript
import axios from "axios";

class App extends Component {
  state = { todos: [], };

  componentDidMount() {
    axios.get("/api/items")
      .then( res => {
        this.setState({ todos: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }
  ```



# React Context
[Documentation](https://reactjs.org/docs/context.html)

###### *Create Provider*
```javascript
import React from "react";

// Set Up The Initial Context
export const XXXContext = React.createContext();
// This is exported if we are using the useContext hook

// Create an exportable consumer that can be injected into components
export const XXXConsumer = XXXContext.Consumer;

// Create the provider
class XXXProvider extends React.Component {
  state = {
    xxx: xxx,
    ...
  };

  render() {
    return (
      <XXXContext.Provider value={this.state}>
        { this.props.children }
      </XXXContext.Provider>
    )
  }
}
export default XXXProvider;
```

###### *Wrap Appliction in Provider - index.js*
```javascript
...
import XXXProvider from "./providers/XXXProvider";

ReactDOM.render(
  <XXXProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </XXXProvider>,
  document.getElementById('root')
);
```
###### *Use in Component*

```javascript
import { XXXConsumer, } from "../providers/XXXProvider";

//wrap components in ...Consumer tags, which then gives access to state values passed down by the Provider:
 <XXXConsumer>
    { value => (
    <div>
      { value.state_item }
    </div>
    )}
  </XXXConsumer>
```


#### Passing Functions Provider to Consumer
###### *XXXProvider.js*
```javascript
class XXXProvider extends React.Component {
  state = {
  ...,
  // Set function as part of state to be passed as a prop to Consumer.
  updateXXX: (info) => this.updateXXX(info),
};
  //Declare function to modify state as-needed:
updateXXX = (info) => {
  this.setState({ ...info, });
}
```

###### *Use in Component*
```javascript
handleSubmit = (e) => {
...
// Example use of function passed from Provider:
  this.props.updateAccount(account);
}

...

const ConnectedAccountForm = (props) => {
  return (
    <XXXConsumer>
      { value => (
        <XXXForm 
          { ...props }
          prop1={value.value1}
          //We can call the function in our component via:
          updateXXX={value.updateXXX}
        />
      )}
    </XXXConsumer>
```

# React Hooks
[Documentation](https://reactjs.org/docs/hooks-intro.html)

**useContext()**

###### *XXXProvider.js*
```javascript
// Add an export to React.createContext const in Provider:
export const XXXContext = React.createContext();
```

###### *Use in Component*
```javascript
import { XXXContext, } from "../providers/XXXProvider";

const StateRender = () => {
  const { username, dateJoined, membershipLevel, } = useContext(XXXContext);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{ username }</Card.Header>
        <Card.Meta>
          Date Joined: { dateJoined }
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership Level: { membershipLevel }</p>
      </Card.Content>
    </Card>
  );
};

export default StateRender;
```
