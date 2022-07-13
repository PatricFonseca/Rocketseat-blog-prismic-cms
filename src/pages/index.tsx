import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import { FiCalendar, FiUser } from 'react-icons/fi';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.postsList}>
          <li className={styles.post}>
            <h1 className={styles.postTitle}>Como utilizar hooks</h1>
            <p className={styles.postDescription}>
              Pensando em sincronização em vez de ciclos de vida.
            </p>
            <p className={styles.postInfo}>
              <div className={styles.postCreatedAt}>
                <FiCalendar color="#BBBBBB" style={{ marginRight: '5px' }} />{' '}
                15Mar 2021
              </div>
              <div className={styles.author}>
                <FiUser color="#BBBBBB" style={{ marginRight: '5px' }} />
                Joseph Oliveira
              </div>
            </p>
          </li>

          <li className={styles.post}>
            <h1 className={styles.postTitle}>Criando um app CRA do zero</h1>
            <p className={styles.postDescription}>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App
            </p>
            <p className={styles.postInfo}>
              <div className={styles.postCreatedAt}>
                <FiCalendar color="#BBBBBB" style={{ marginRight: '5px' }} />
                <span>15Mar 2021</span>
              </div>
              <div className={styles.author}>
                <FiUser color="#BBBBBB" style={{ marginRight: '5px' }} />
                <span>Danilo Vieira</span>
              </div>
            </p>
          </li>
          <a className={styles.buttonLoadPosts} href="">
            Carregar mais posts
          </a>
        </ul>
        {/* <ul>
          {postsPagination?.results.map((post: Post) => (
            <>
              <h1 key={post.uid}>{post.data.title}</h1>
              <p>{post.data.subtitle}</p>
            </>
          ))}
        </ul> */}
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
