import MovieCard from "../components/MovieCard";
import {useState,useEffect} from "react";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                console.log(popularMovies);
            } catch (error) {
                console.log(error);
                setError("Failed to fetch popular movies");
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);
    const handleSearch = async (e) => {
        e.preventDefault();

        if (searchQuery.trim() === "") return;
        if (loading) return;
        setLoading(true); 
        try {
           const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (error) {
            console.log(error);
            setError("Failed to fetch search results");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='home'>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for a movie..."  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form> 
            {error && <div className="error-message">{error}</div>}
            {loading?(<div className="loading">Loading...</div>):error?(<div className="error">{error}</div>):movies.length===0?(<div className="no-movies">No movies found</div>):null} 
        <div className='movie-grid'>
            {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (<MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        </div>
    );
}

export default Home;
