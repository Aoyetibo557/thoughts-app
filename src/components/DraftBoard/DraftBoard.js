/* eslint-disable array-callback-return */
import React, {useState, useEffect} from 'react';
import { auth } from '../../firebase/firebase';
import { deleteDraft, getDrafts } from '../../util/util';
import BasicAlert from '../BasicAlert/BasicAlert';
import SearchBar from '../SearchBar/SearchBar';
import "./DraftBoard.css";
import DraftCard from './DraftCard';
import Loading from '../Loading/Loading';


function DraftBoard() {
    const [searchQuery, setSearchQuery] = useState('');
    const [drafts, setDrafts] = useState([]);
    const [filteredDrafts, setFilteredDrafts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(searchQuery);
    }

    useEffect(() => {
        setIsLoading(true);
        const timeout =setTimeout(()=>{
            try {
                getDrafts(searchQuery, auth.currentUser?.uid).then(drafts => {
                    setDrafts(drafts);
                    console.log(drafts);
                    setIsLoading(false);
                }).catch(error => {
                    console.log(error.message);
                })
            }catch(error) {
                console.log(error.message);
            }    
        },3000)
        return () => clearTimeout(timeout);
    }, [])

    useEffect(() => {
        setFilteredDrafts(drafts);
        const filtered = drafts.filter(draft => draft.content.toLowerCase().includes(searchQuery.toLowerCase()) || draft.location.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredDrafts(filtered);
    }, [drafts, searchQuery])

    const onDelete = (draftId) => {
        setIsDeleting(true);
        setDrafts(drafts.filter(draft => draft.postId !== draftId));
        deleteDraft(draftId).then(() => {
            console.log('draft deleted');
            setIsDeleting(false);
        }).catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }

  return (
    <div className='draftboard'>
        {!isDeleting && <BasicAlert type={"success"} message="Draft Deleted!" />}
        {error.length > 0 && <BasicAlert type={"error"} message={error || "An error occured while deleting!"} />}
        <div className='draftboard__container'>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSubmit={onSubmit} />
        
           {filteredDrafts.length > 0 ? (
                <div className='draftboard__list'>
                    {filteredDrafts.map(draft => (
                        <DraftCard key={draft.postId} draft={draft} onDelete={() => onDelete(draft.postId)} />
                    ))}
                </div>
           ):(
                <div className='draftboard__empty'>
                    
                    {isLoading ? <Loading /> : <p>No drafts found!</p>}
                </div>
           )}
        </div>
    </div>
  )
}

export default DraftBoard