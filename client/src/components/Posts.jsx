import React, { useState } from 'react'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'
import PostItem from './PostItem'

const DUMMY_POSTS = [
  {
    id: '1',
    thumbnail: Thumbnail1,
    category:'education',
    title:'This is the title of the very 1st post on this blog.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odit quae quas! Est tempora porro, suscipit fuga non deleniti aliquid voluptate quo corporis vero sapiente eligendi ea sunt ratione fugit molestias veritatis soluta illo fugiat itaque at optio qui!',
    authorID: 3
  },
  {
    id: '2',
    thumbnail: Thumbnail2,
    category:'science',
    title:'This is the title of the very 2nd post on this blog.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odit quae quas! Est tempora porro, suscipit fuga non deleniti aliquid voluptate quo corporis vero sapiente eligendi ea sunt ratione fugit molestias veritatis soluta illo fugiat itaque at optio qui!',
    authorID: 1
  },
  {
    id: '3',
    thumbnail: Thumbnail3,
    category:'weather',
    title:'This is the title of the very 3rd post on this blog.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odit quae quas! Est tempora porro, suscipit fuga non deleniti aliquid voluptate quo corporis vero sapiente eligendi ea sunt ratione fugit molestias veritatis soluta illo fugiat itaque at optio qui!',
    authorID: 13
  },
  {
    id: '4',
    thumbnail: Thumbnail4,
    category:'farming',
    title:'This is the title of the very 4th post on this blog.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem odit quae quas! Est tempora porro, suscipit fuga non deleniti aliquid voluptate quo corporis vero sapiente eligendi ea sunt ratione fugit molestias veritatis soluta illo fugiat itaque at optio qui!',
    authorID: 11
  },
]


const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
      <div className="container posts__container">
      {
        posts.map(({id,thumbnail,category,title,desc,authorID})=> <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID}/>)
      }
      </div>
    </section>
  )
}

export default Posts