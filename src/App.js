import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Bai2 from './components/Bai2';
import Bai3 from './components/Bai3';
import Bai4 from './components/Bai4';
import Vidu3 from './components/Vidu3';
import Hello from './components/Hello';
import Avatar from './components/Avatar';
import { items } from './components/Data';

function App() {
  return (
    <Container>
      <Header/>
      <Hello who="Thu Ha" />
      <Hello who="Minh Tu" age={6} />
      <Avatar name="Minh Tu" gender={true} image='images/book1.png' />
      <hr/>
      {
        items?.map((p) => (
          <Avatar name={p.name} gender={p.gender} image={p.image} />
        ))
      }
    </Container>
  );
}

export default App;
