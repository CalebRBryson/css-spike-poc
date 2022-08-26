import './App.scss';
import StyledComponentHeader from './StyledComponentHeader.js'
import './WebComponentHeader.js';
import CSSModuleHeader from './CSSModuleHeader.js';
import BemHeaderGroup from './BemHeaderGroup.js';

function App() {
  return (
    <div className="App">
      <h1> CSS Styling POC </h1>
      <h2> CSS STYLING </h2>
      <BemHeaderGroup/>
      <StyledComponentHeader/>
      <web-component-header/>
      <CSSModuleHeader/>
    </div>
  );
}

export default App;
