import { Flex } from '@chakra-ui/react'
import { Post } from './post'

interface CommentaryProps {
    name: string,
    avatar: string;
    content: string;
    likesCounter: number;
}

interface PostProps {
    community: string,
    author: string,
    title: string,
    content: string,
    likesCount: number,
    dislikesCount: number,
    commentaryCount: number,
    shareCount:number,
    commentaries: CommentaryProps[]
}

interface PostsProps {
    posts: PostProps[]
}

export const Posts = ({ posts }: PostsProps) => {
    
    return (
       <Flex
        flexDir='column-reverse'
       >
        {
            posts.map((post) => {
                return (
                    <Post
                        key={post.title}
                        community={post.community}
                        author={post.author}
                        title={post.title}
                        content={post.content}
                        likesCount={post.likesCount}
                        dislikesCount={post.dislikesCount}
                        commentaryCount={post.commentaryCount}
                        shareCount={post.shareCount}
                        commentaries={post.commentaries}
                    /> 
                )
            })
        }
       </Flex>
    )
}