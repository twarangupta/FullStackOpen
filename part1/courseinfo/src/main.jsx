import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <App counter={counter} />
) 
counter += 1;

const refresh = () => {
  root.render(
  <App counter={counter} />
  )
}
refresh();
counter+= 1;
refresh();

setInterval(() => {
  refresh();
  counter += 1;
  // console.log("counter = ", counter)
},1000)
