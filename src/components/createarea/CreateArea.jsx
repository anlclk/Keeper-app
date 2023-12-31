import { useState } from "react";


export default function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return { ...prevNote, [name]: value };
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return(
        <div>
            <form>
                <input
                    name="title" 
                    value={note.title}
                    onChange={handleChange}
                    placeholder="Başlık gir" />
                <textarea name="content" 
                    value={note.content} 
                    onChange={handleChange} 
                    placeholder="Bir not yaz"
                    rows="3" />
                <button onClick={submitNote}>Ekle</button>
            </form>
        </div>
    );
}