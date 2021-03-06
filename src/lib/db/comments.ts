import { prisma } from '$lib/prisma';
import type { Comment, Post, UserLikesComment } from '@prisma/client';
import { userMatti, userSimon } from './dummy/data';

export async function addCommentToPost(post: Post, text: string): Promise<Comment> {
    const result: Comment = await prisma.comment.create({
        data: {
            text: text,
            post: {
                connect: { id: post.id }
            },
            user: {
                connect: { id: userSimon.id } // TODO: Change to local storage
            }
        }
    })
    return result
}

export async function likeComment(comment: Comment): Promise<Comment> {
    const result: Comment = await prisma.comment.update({
        where: {
            id: comment.id
        },
        data: {
            likes: {
                create: {
                    user: {
                        connect: { id: userMatti.id } // TODO: Change to local storage
                    }
                }
            }
        }
    })
    return result
}

export async function removelikeFromComment(comment: Comment): Promise<boolean> {
    try {
        await prisma.userLikesComment.delete({
            where: {
                userId_commentId: {
                    userId: userMatti.id, // TODO: Change to local storage
                    commentId: comment.id
                }
            },
        })
        return true
    }
    catch (PrismaClientKnownRequestError) {
        console.log('User has not liked the comment') // TODO: Better error handling
        return false
    }
}

