import { registerRootComponent } from 'expo';

// Importa o componente principal definido em App.js.
import App from './App';

// Registra App como o ponto inicial da aplicação.
// O Expo também prepara o ambiente para funcionar tanto no Expo Go
// quanto em uma compilação nativa para Android ou iOS.
registerRootComponent(App);
