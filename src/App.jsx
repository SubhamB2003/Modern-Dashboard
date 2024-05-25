import { CssBaseline } from '@mui/material';
import Dashboard from './Dashboard';

function App() {

  // const data = [
  //   {
  //     "id": "python",
  //     "label": "python",
  //     "value": 435,
  //     "color": "hsl(169, 70%, 50%)"
  //   },
  //   {
  //     "id": "css",
  //     "label": "css",
  //     "value": 483,
  //     "color": "hsl(229, 70%, 50%)"
  //   },
  //   {
  //     "id": "go",
  //     "label": "go",
  //     "value": 372,
  //     "color": "hsl(134, 70%, 50%)"
  //   },
  //   {
  //     "id": "haskell",
  //     "label": "haskell",
  //     "value": 417,
  //     "color": "hsl(214, 70%, 50%)"
  //   },
  //   {
  //     "id": "stylus",
  //     "label": "stylus",
  //     "value": 507,
  //     "color": "hsl(73, 70%, 50%)"
  //   }
  // ];


  return (
    <div style={{ backgroundColor: "#f1f5f9", height: '100vh', overflow: 'scroll' }}>
      <CssBaseline />
      <Dashboard />
    </div>
  )
}

export default App
