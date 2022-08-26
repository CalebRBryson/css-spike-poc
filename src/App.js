import './App.scss';
import StyledComponentHeader from './StyledComponentHeader.js'
import './WebComponentHeader.js';
import CSSModuleHeader from './CSSModuleHeader.js';
import BemHeaderGroup from './BemHeaderGroup.js';

function App() {
  return (
    <div className="App">
      <h1> CSS POC </h1>
      <h2> Plain CSS </h2>
      <BemHeaderGroup/>
      <StyledComponentHeader/>
      <web-component-header/>
      <CSSModuleHeader/>
    </div>
  );
}

export default App;
