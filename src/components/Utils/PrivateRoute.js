import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function PrivateRoute({ component: Component, ...props }) {
    return (
        <Route
            {...props}
            render={compProps => (
                TokenService.hasAuthToken()
                    ? <Component {...compProps} />
                    : <Redirect             
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
            )}
        />
    )
}