

export function StarInput({handleChange}){

    return(
        <div className="item-input">
        <label htmlFor="stars">Stars: </label>
        <input onChange={handleChange} type="range" min='1' max='5' name="stars" id="stars" />
    </div>

    )
}