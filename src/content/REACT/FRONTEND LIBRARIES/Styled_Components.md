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