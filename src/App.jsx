import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


function App() {
  return (
    <div>

      <Header />
      <div className= {styles.wrapper}>
          <Sidebar />
        <main>
          <Post
          author= "Mateus Macedo"
          content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nihil quis voluptate exercitationem, corrupti veniam reiciendis vero dolor possimus enim perferendis quia error impedit et necessitatibus iusto culpa blanditiis? Ipsum."

          />
          <Post
          author= "Sophia Alves"
          content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nihil quis voluptate exercitationem, corrupti veniam reiciendis vero dolor possimus enim perferendis quia error impedit et necessitatibus iusto culpa blanditiis? Ipsum." 
          />
        </main>
        
        </div> 
    </div>
  )
}

export default App
