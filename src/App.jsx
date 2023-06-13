import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
      id: 1,
      author: {
        avatarUrl: "https://github.com/thiagoamacedo.png",
        name: 'Thiago Macedo',
        role: 'Web Developer',
      },
      content: [
       {type: 'paragraph', content: 'Fala galeraa 👋',},
       {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date('2023-06-13 22:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/RaphaelAoki.png',
      name: 'Rafael Aoki',
      role: 'Web Developer',
    },
    content: [
     {type: 'paragraph', content: 'Fala galeraa 👋',},
     {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-06-10 22:00:00'),
},
];


function App() {
  return (
    <div>

      <Header />
      <div className= {styles.wrapper}>
          <Sidebar />
        <main>
           {posts.map(post => {
             return (
             <Post 
                author= {post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
             />
             )
           })}
        </main>   
        </div> 
    </div>
  )
}

export default App
