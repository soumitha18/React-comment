import React, { useState } from 'react'
import * as timeago from 'timeago.js'
import Replay from "./Replay"

export default function Card({ obj }) {

    const [state, setState] = useState(false)
    const [showReplay, setShowReplay] = useState(false)

    const handleSubmit = (replay) => {
        if (!obj.replies) {
            obj.replies = [replay]
        }
        else {
            obj.replies.push(replay)
        }
        setShowReplay(false)
        setState(true)
    }

    return (
        <>
            <div className="card mt-4 border-0" style={{ width: "30%" }}>
                <div className="card-body">
                    <small>{`${obj.author} ${obj.points} Points ${timeago.format(obj.timestamp)}`}</small>
                    <h5 className="my-4">{`${obj.body}`}</h5>
                    {
                        showReplay ?
                            <Replay onSubmit={handleSubmit} cancel={() => setShowReplay(false)} />
                            :
                            <>
                                <button className="bg-light border-0 text-secondary" onClick={() => setShowReplay(true)}>Replay</button>
                                <button className="bg-light border-0 text-secondary" disabled={obj.replies && obj.replies.length !== 0 ? false : true} onClick={() => setState(!state)}>{state ? "Hide" : "Show"}</button>
                                <button className="bg-light border-0 text-secondary">Share</button>
                                <button className="bg-light border-0 text-secondary">Report</button>
                                <button className="bg-light border-0 text-secondary">Save</button>
                            </>

                    }
                </div>
            </div>
            {
                state ?
                    <div className="ml-5">
                        {
                            obj.replies && obj.replies.map(item => (

                                <Card key={item.id} obj={item} />
                            ))
                        }
                    </div>
                    :
                    null
            }
        </>
    )
}


