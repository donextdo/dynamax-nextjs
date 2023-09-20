import React from 'react'
import CommentCard from './CommentCard'
import avatar from "../../../assets/comment/avatar.png"


const CommentList = () => {
   const Comments = [
        {
            comment: "Dynamax helped me to feel the best hotel Caravan experience and it wasamazing. The finding and booking were very easy. and they also gave full packages at a very affordable price. Love it." ,
            name: 'Kevin Shelder',
            country: 'Australia',
            img : avatar

        },    
        {
            comment: "Amazing experience. 100% recommended. I found the best caravan service from Dynamax. Because of that and the amazing caravan, I found using this website totally made my whole vacation",
            name: 'Kevin Shelder',
            country: 'Australia',
            img : avatar


        },
        {
            comment: "Amazing experience. 100% recommended. Loved it",
            name: 'Oliver S.walker',
            country: 'United States',
            img : avatar


        }
    ]
    return (
        <div className='bg-[#e5e7eb]'>
            <div className='container mx-auto px-[15px] py-[32px]'>
                <h2 className="text-[2rem] mb-[2rem]">What our Valuable Customers Say</h2>

                <div className='grid grid-cols-2 gap-[4%]'>
                    {Comments.slice(0,2).map((comment, index)=>(
                        <CommentCard comment={comment} key={index}/>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default CommentList
