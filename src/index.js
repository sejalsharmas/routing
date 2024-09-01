import ReactDOM, { createRoot } from 'react-dom/client';
import Products from './views/Product/Products';
import Resources from './views/Resources/Resources';
import Features from './views/Features/Features';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"))

const currentPath = window.location.pathname;

if (currentPath == '/') {
    root.render(<Products />);
} 
else if (currentPath=='/Resources')
{
    root.render(<Resources/>)
}
else if (currentPath=='/Features'){
    root.render(<Features/>)
}
else {
    root.render(<h1>404 Not Found</h1>)
}


