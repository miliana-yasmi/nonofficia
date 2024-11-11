import React from 'react';
import './CustomLayout.css';

class CustomLayoutContainer extends React.Component {
  render() {
    return (
      <div className="custom-layout">
        {this.props.children}
      </div>
    );
  }
}

export default CustomLayoutContainer;

// Usage in another component
import React from 'react';
import CustomLayoutContainer from './CustomLayoutContainer';

function App() {
  return (
    <CustomLayoutContainer>
      <div className="custom-layout-item">Item 1</div>
      <div className="custom-layout-item">Item 2</div>
      <div className="custom-layout-item">Item 3</div>
    </CustomLayoutContainer>
  );
}

export default App;
