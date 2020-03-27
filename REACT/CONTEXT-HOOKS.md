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
