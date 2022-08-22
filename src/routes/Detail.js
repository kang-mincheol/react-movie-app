import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [start, setStart] = useState('');
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setTitle(json.data.movie.title);
        setSummary(json.data.movie.description_intro);
        setStart(json.data.movie.year);
    }

    useEffect(() => {
        getMovie();
    }, );

    return <div>
        <h1>{title}</h1>
        <p>{summary}</p>
        <p>{start}</p>
    </div>;
}

export default Detail;