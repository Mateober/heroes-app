import { HeroList } from '../components';

export const MarvelPage = () => {
    return (
        <>
            <h1>Marvel Comics</h1>
            <hr />
            <ul></ul>

            <HeroList publisher="Marvel Comics" />
        </>
    );
};
