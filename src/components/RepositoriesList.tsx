import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useSelector(
        (state: any) => state.repositories
    );

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searchRepositories(term);
    };
    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error &&
                !loading &&
                data.map((name: any) => <div key={name}>{name}</div>)}
        </div>
    );
};
export default RepositoriesList;
