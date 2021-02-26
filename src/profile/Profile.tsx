import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import fetchData from '../common/fetch';
import './Profile.css';

const Profile: React.FC = () => {

    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);

    const { userId } = useParams<ProfileParams>();
    const history = useHistory();

    useEffect(() => {

        const fetchUser = async (): Promise<void> => {
            try {
                setLoading(true);
                setUser(await fetchData(`/api/users/${userId}`));
                setLoading(false);
            } catch (ex) {
                console.log('NAAAIN')
                history.push('/not-found');
            }
        };

        fetchUser();
    }, [userId, history]);

    const { name, jobTitle, bio, hobbies, favouriteFood } = user || {};

    return loading ?
        <div className="is-text-centered"><em>Loading...</em></div> :
        (
            <div className="Profile">
                <div className="Profile-summary is-text-centered">
                    <img src={`/api/users/${userId}/avatar`} alt={name || ''} />
                    <h1>{name}</h1>
                    <h2>{jobTitle}</h2>
                </div>
                <div className="Profile-details">
                    <h3>About me:</h3>
                    {bio?.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
                    <h3>My hobbies:</h3>
                    <p>{hobbies?.join(', ')}</p>
                    <h3>My favourite food:</h3>
                    <p>
                        {favouriteFood?.map(({ name, link }: FavouriteFood) => (
                            <a
                                key={name}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="is-display-block">
                                {name}
                            </a>
                        ))}
                    </p>
                </div>
            </div>
        );
};

interface ProfileParams {
    userId: string;
};

interface User {
    name: string;
    jobTitle: string;
    bio: string[];
    hobbies: string[];
    favouriteFood: FavouriteFood[];
};

interface FavouriteFood {
    name: string;
    link: string;
}

export default Profile;