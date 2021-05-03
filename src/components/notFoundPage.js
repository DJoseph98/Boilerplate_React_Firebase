import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
    <div>
        404 <Link to="/home">GO HOME</Link>
    </div>
);

export default NotFoundPage;
