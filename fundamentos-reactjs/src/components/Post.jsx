import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publisheAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana!'
  ]); /**Criando estado comentário e atualizando o estado dados do user */
  const [newCommentText, setNewCommentText] = useState('')

  const newFommattedDate = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRalativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true,
  });
  // const newFommattedDate = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute:'2-digit'
  // }).format(publisheAt)

  function handleCreateNewComment() {
    event.preventDefault()/**Serve para atualizar a page e manter na mesma page*/
    setComments([...comments, newCommentText]);
    setNewCommentText('');

  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={newFommattedDate} dateTime={publisheAt.toISOString()}>
          {publishedDateRalativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
        {/* <p>
          <a href="https://github.com/AlessandraSM/AlessandraSM">
            Acesse em meu repositório GitHub!
          </a>
        </p> */}
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        name="comment"
        placeholder="Deixe um comentário" 
        onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
       {comments.map((comment =>{
        return <Comment content={comment}/> 
       }))}
      </div>
    </article>
  );
}
