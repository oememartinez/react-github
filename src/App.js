import './App.css';
import Filters from './components/filters';
import Layout from './components/layout';
import Profile from './components/profile';
import RepoList from './components/repo-list/repo-list';
import Search from './components/search';

const repoList = [
  {
    name: "Mi primer repo en react",
    id: 12232
  },
  {
    name: "Mi segundo repo en react",
    id: 122329882
  }
]

function App() {
  return (
    <Layout>
      <Profile />
      <Filters />
      <RepoList repoList={repoList} />
      <Search />
    </Layout>
  )
}

export default App;
