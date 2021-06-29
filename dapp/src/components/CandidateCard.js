import React from 'react';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite'

import { useCandidateList } from '../hooks/useCandidateList'
import { useCandidateScore } from '../hooks/useCandidateScore'
import { useVote } from '../hooks/useVote'

interface Props {
    index: number
}

export const CandidateCard = observer(({ index }: Props) => {
    const { candidateName } = useCandidateList(index)
    const { voteCount, fetch } = useCandidateScore(index)
    const { vote, loading } = useVote()

    const voteCallback = useCallback(async() => {
        await fetch()
    }, [fetch])

    return (
        <div className="CandidateCard">
            <div className="card">
                <h5 className="card-header">{candidateName} ({index})</h5>
                <div className="card-body">
                    <p className="card-text">Vote count : {voteCount}</p>
                    <Button variant="primary" onClick={() => {vote(index, voteCallback)}}>Vote</Button>
                </div>
            </div>

        </div>
    )
}
)



export default CandidateCard;