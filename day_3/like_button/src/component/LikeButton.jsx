import { useState } from "react";
function LikeButton() {
    const [like, setliked] = useState(0);
    const [likeCount, setLikedCount]= useState(0);
    const [Disabled, setDisabled] = useState(true);


    function likeIncrement() {
        setDisabled(false)

        // if (disabled)
        //     return;

        setliked((currentLiked) => {
            const newLike = !currentLiked;
            setLikedCount(newLike ? 1 : 0)
            return newLike
        });

        // setcount(prev => like ? prev -1 : prev +1);
        // setIsDisabled(true);
        setTimeout(() => setDisabled(true), 1000);
    };

    return( 
        <div>
            <button 
             onClick={likeIncrement}
             isDisabled={Disabled}
             className={`
                ${like ? 'liked' : 'unliked'}
                ${Disabled ? '' : ''}
                `}
            >
                <span role="img" aria-label={like ? 'red heart' : 'white heart'}>
                    {like ? '❤️' : '🤍'}
                </span>
                {like ? 'Liked' : 'Like'}
            </button>
            <span className="text">
                {likeCount} {likeCount === 1 ? 'like' : 'likes'}
            </span>
        </div>
        // <div>
        //     <button onClick={likeIncrement} disabled = {Isdisabled} >
        //         {like ?  '❤️ Liked' : '🤍 Like' } - {likecount} {likecount=== 1 ? 'like' : 'likes'}
        //     </button>
            

        // </div>
    );

}

export default LikeButton;

// import { useState } from "react";

// function LikeButton() {
//     const [like, setLike] = useState(false);
//     const [likeCount, setLikeCount] = useState(0);
//     const [isDisabled, setIsDisabled] = useState(false);
    
//     function handleClicks () {
//         setIsDisabled(true);

//         setLike((currentLiked) => {
//             const newLike = !currentLiked;
//             setLikeCount(newLike  ? 1 : 0);
//             return newLike;
//         });

//         setTimeout(() => {
//             setIsDisabled(false)
//         }, 1000);
//     };

//     return (
//         <div>
//             <button 
//              onClick={handleClicks}
//              disabled={isDisabled}
//              className={`
//                 ${like ? 'liked' : 'unliked'}
//                 ${isDisabled ? '' : ''}
//                 `}
//             >
//                 <span role="img" aria-label={like ? 'red heart' : 'white heart'}>
//                     {like ? '❤️' : '🤍'}
//                 </span>
//                 {like ? 'Liked' : 'Like'}
//             </button>
//             <span className="text">
//                 {likeCount} {likeCount === 1 ? 'like' : 'likes'}
//             </span>
//         </div>
//     )
// }

// export default LikeButton;