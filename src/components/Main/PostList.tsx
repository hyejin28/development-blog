//여러 포스트 아이템을 묶는 포스트 리스트

import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import PostItem from "./PostItem";
import { PostListItemType } from 'types/PostItem.types'

export type PostType = {
    node: {
        id: string
        frontmatter: {
            title: string
            summary: string
            date: string
            categories: string[]
            thumbnail: {
                publicURL: string
            }
        }
    }
}

type PostListProps = {
    posts: PostListItemType []
}

// const POST_ITEM_DATA = {
//     title: 'Post Item Title',
//     date: '2022.12.20.',
//     categories: ['Web', 'Fronted', 'Testing'],
//     summary:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
//     thumbnail:
//         'http://www.koreaisacademy.com/renewal2016/img/curriculum/web02.jpg',
//     link: 'https://www.google.co.kr/'
// }

const PostListWrapper = styled.div`
    display: grid;
    gird-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 768px;
    margin: 0 auto;
    padding: 50px 0 100px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 100%;
        padding: 50px 20px;
    }
`

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
    return (
    <PostListWrapper>
        {posts.map(
            ({
             node: { id, frontmatter },
             }: PostType) => (
                <PostItem
                    {...frontmatter}
                    link="https://www.google.co.kr/"
                    key={id}
                />
            ),
        )}
    </PostListWrapper>
    )
}

export default PostList