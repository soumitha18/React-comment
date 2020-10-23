import React, { useState } from 'react'
import { v4 as uuid } from "uuid"

export default function Replay({ onSubmit, cancel }) {
    const [replay, setReplay] = useState("")

    const handleSubmit = () => {
        let obj = {
            id: uuid(),
            author: "Soumitha",
            timestamp: new Date(),
            points: 0,
            body: replay
        }
        onSubmit(obj)
    }

    return (
        <div>
            <input type="text" value={replay} onChange={(e) => setReplay(e.target.value)} />
            <button className="btn-primary" onClick={handleSubmit} >Save</button>
            <button className="btn-danger" onClick={cancel}>Cancel</button>
        </div>
    )
}
