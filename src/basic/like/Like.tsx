import React from 'react'
import { LikeComponentView } from './LikeView'

interface Props {
    like: number;
    comment: number;
    onLike: (value: number) => void
    onDislike: (value: number) => void

}

export const Like = ({ like, comment, onDislike, onLike }: Props) => {
    return <LikeComponentView onLike={onLike} onDislike={onDislike} like={like} comment={comment} />
}