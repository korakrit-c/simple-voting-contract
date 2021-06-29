import React from 'react'
import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'

import CandidateCard from './CandidateCard'
import { useCandidateCount } from '../hooks/useCandidateCount'

export const Voter = observer(() => {
    const { candidateCount } = useCandidateCount();
    const arr = useMemo(() => Array.from(new Array(candidateCount), (x, i) => i), [candidateCount])

    return (
        <div className="Voter">
            <div className="card">
                {arr.map((idx) => (
                    <CandidateCard index={idx} key={idx} />
                ))}
            </div>
        </div>
    )
}
)



export default Voter;