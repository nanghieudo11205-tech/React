import Sidebar from '../components/Sidebar';
import TabTable from '../components/TabTable';

function Home() {
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '12px' }}>
        <TabTable />
      </div>
    </div>
  );
}

export default Home;