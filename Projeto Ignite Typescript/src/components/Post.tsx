import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface Author {/**Para cessar erros em typescript crio as interfaces passando seus valores corretamente para uma variável */
  name: string;
  role: string; 
  avatarUrl: string;
}

interface Content { 
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author; 
  publishedAt: Date; 
  content: Content[];
}

export function Post({ author, publishedAt, content }:PostProps) {
  const [comments, setComments] = useState([
    "Post muito bacana!",
  ]); /**Criando estado comentário e atualizando o estado dados do user */
  const [newCommentText, setNewCommentText] = useState("");

  const newFommattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRalativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  // const newFommattedDate = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute:'2-digit'
  // }).format(publishedAt)

  function handleCreateNewComment(event:FormEvent) {
    event.preventDefault(); /**Serve para atualizar a page e manter na mesma page*/
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
    event?.target.setCustomValidity('');
    setNewCommentText(event?.target.value);
  }
  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
    event?.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete:string){
  // console.log(`Deletar comentário ${comment}`)
  const commentsWithoutDeletedOne = comments.filter(comment => {
    return comment !== commentToDelete; 
    })
    setComments(commentsWithoutDeletedOne);
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
        <time title={newFommattedDate} dateTime={publishedAt.toISOString()}>
          {publishedDateRalativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
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
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
                  <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                  />
                )
         })}
      </div>
    </article>
  );
}
