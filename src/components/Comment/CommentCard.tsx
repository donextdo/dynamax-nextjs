import Image from 'next/image'
import React from 'react'
import avatar from "../../../assets/comment/avatar.png"

const CommentCard = ({ comment }: any) => {
    return (
        <div className='flex flex-col justify-between min-w-[48%] bg-white p-[20px] shadow-sm rounded-sm'>
            <p className='text-[18px]'>{comment.comment}</p>

            <div className='mt-4 flex gap-[1rem]'>
                <div className="w-55 h-55 overflow-hidden rounded-[50%]">
                    <Image  src={comment.img} alt='comment' className='w-full h-full object-cover' height={100} width={100}/>
                </div>
                <div className="flex flex-col items-start justify-around">
                    <h4 className='text-[1.2rem] leading-[24px] font-normal'>{comment.name}</h4>
                    <span className='text-base leading-[24px] font-normal'>{comment.country}</span>
                </div>
            </div>
        </div>
    )
}

export default CommentCard
