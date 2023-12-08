import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog21.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/wrw/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/wrw/delete`} className='btn sm danger'>delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum libero hic voluptas distinctio excepturi eos quisquam nam iure, tenetur, impedit at quos doloremque nesciunt saepe ex voluptatum quo possimus id soluta obcaecati commodi et a, molestiae illum. Consequuntur, ullam architecto!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ullam sit cumque eligendi alias est molestias nesciunt blanditiis recusandae. Earum minima nihil nostrum ipsum similique tempore vel consequatur nulla autem modi nobis dolorum doloribus soluta asperiores assumenda expedita, fuga natus quam tempora dolore voluptatum commodi, repellat quos. Neque id eaque quidem deserunt earum et corrupti doloribus necessitatibus unde magni blanditiis velit nisi autem, veritatis aspernatur delectus illo dignissimos. Deserunt distinctio ratione vero recusandae natus perferendis, saepe nisi sunt? Error explicabo natus ullam inventore perspiciatis porro cum ipsum vitae suscipit perferendis praesentium dignissimos, aut soluta officiis at eveniet rem rerum totam reiciendis adipisci sequi distinctio laudantium ab aliquid. Ab assumenda tempora consequatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda placeat quidem nam consectetur vel voluptatum molestias quaerat ex doloremque?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptates ipsum aliquam blanditiis provident. Hic ratione officia repudiandae aliquid sunt, praesentium cupiditate reprehenderit modi quam incidunt perspiciatis commodi optio voluptatum unde placeat quos voluptas sint ut illum maiores consectetur alias fuga in molestiae. Minus aperiam alias ipsum recusandae accusantium, in libero dolorem, eos voluptates ullam porro qui omnis, est laboriosam aspernatur natus reiciendis non? Dolorum labore ipsum dolores non unde harum animi laudantium! Nostrum dolorum similique quae adipisci harum dolores explicabo nulla! Tempore molestiae asperiores eos libero quaerat quos velit aliquid sed eaque, perferendis voluptatum modi assumenda et, excepturi saepe hic eveniet? Nesciunt vitae magni eius quis omnis esse laborum veniam, deleniti id! Cumque id, necessitatibus ea, in aperiam quis eos eveniet officia vel vero beatae illum tempore delectus et quisquam est omnis eligendi. Iure, perferendis eaque corrupti eius adipisci praesentium et, veniam facere sapiente animi maxime, iste consequuntur ea commodi ipsa? Tenetur sequi cumque praesentium illum reprehenderit nemo fugit nostrum, quisquam voluptas quia accusantium aut similique, placeat optio adipisci blanditiis accusamus iste vero. Impedit accusamus maxime eaque beatae pariatur ipsum mollitia dicta nostrum? Nisi blanditiis ratione commodi aliquid adipisci dolorum debitis nostrum id impedit nesciunt, qui nemo ipsa tenetur.
        </p>
      </div>
    </section>
  )
}

export default PostDetail