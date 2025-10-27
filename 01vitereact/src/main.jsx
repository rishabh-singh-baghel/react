import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// function MyApp () {
//   return (
//   <div>
//     <h1>Coustom React ! </h1>
//   </div>
//   )
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '-blank'
//     },
//     children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href = "https.//google.com">Click me to visit google</a>
// )


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'Click me !!'
)
createRoot(document.getElementById('root')).render(
 
   <App/> 
  
)
