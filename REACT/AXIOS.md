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
