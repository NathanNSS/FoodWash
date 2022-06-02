import '../styles/global.css'
import { Titulo, Titulo2 } from './homeStyles'
import { theme } from '../styles/theme'
export default function App() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Titulo>
        Olá Mundo
      </Titulo>
      <Titulo2>
        Olá
      </Titulo2>
    </div>
  )
}

