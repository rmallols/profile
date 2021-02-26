import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
    <div className="is-text-centered">
        <h3>Ooops, the resource you're looking for isn't available :/</h3>
        <p>
            <Link to="/">Go to Homepage</Link>
        </p>
    </div>
);

export default NotFound;