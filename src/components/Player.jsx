import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        //gunakan seperti ini jika update state berdasarkan state sebelumnya 
        //jangan lakukan seperti ini setIsEditing(!isEditing)
        setIsEditing((editing) => !editing)
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing && <input type="text" required value={playerName} onChange={handleChange}></input>}
                {!isEditing && <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}