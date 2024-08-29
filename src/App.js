import { DatosContexto } from './components/DatosContexto';
import { useClientes } from './hooks/useClientes';
import { AppRoutes } from './routes/AppRoutes';
import '../src/styles/principalApp.css'

function App() {
  const clientes = useClientes();
  return (
    <div className="App">
      <DatosContexto.Provider value={{clientes}}>
        <AppRoutes />
      </DatosContexto.Provider>
    </div>
  );
}

export default App;
