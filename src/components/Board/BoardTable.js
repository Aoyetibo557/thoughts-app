import React, {useState, useEffect} from 'react';
import "./BoardTable.css";
import "../styles.css";
import Modal from "../Modal/Modal"
import Card from "../Card/Card"
import { auth } from '../../firebase/firebase';
import SkeletonCard from '../Skeleton/SkeletonCard';
import { getUsersCard } from '../../util/util';

function BoardTable() {
    const [cards, setCards] = useState([]);

    // generate number {Built in array functionality. Chck out Array.from() in MDN WEB DOCS}
    const range = (start, stop, step) => Array.from({length: (stop -start) / step +1},(_, i) => start + (i * step))
    
    useEffect(() => {
        // getCards();
        
        setTimeout(async () => {
            await getCards();
        }, 3000)
    },[])


    const getCards = _ => {
        try{
            const newArr = [];
            getUsersCard(auth?.currentUser?.uid).then(res => {
                // console.log("res:", res)
                res.map(doc => (
                    newArr.push(doc)
                ))
                setCards(newArr);
            }).catch((error) => {
                alert("An Error occured while querying dtabase!", {code:error.code, msg:error.message})
            })     
        }catch(error){
            console.log(error)
        }
        
    }

    return cards ? (
        <>
            {/* This is where all the cards will be Cards */}
            <div className='boardtable'>
                <div className='boardtable__cards'>

                    {cards.length === 0 && (
                        range(1,3,1).map((n) => (
                            <SkeletonCard theme="" key={n} />
                        ))
                    )}  


                    {cards.map((cardData, idx) => (
                        <Card
                            key={idx}
                            author={cardData.author}
                            avatar ={cardData.avatar}
                            firstTag={cardData.firstTag}
                            secondTag={cardData.secondTag}
                            thirdTag={cardData.thirdTag}
                            numLikes={cardData.numLikes}
                            numViews = {cardData.numViews}
                            publishDate={cardData.publishDate?.seconds}
                            content={cardData?.content}
                        />
                    )).reverse()}


                </div>
            </div>
        </>
  ) : (
      <div>
          <h4>This user does not currently have any cards on the account!</h4>
      </div>
  )
}

export default BoardTable