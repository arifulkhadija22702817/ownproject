import React, { Component } from 'react';

class ErrorElement extends Component {
    render() {
        return (
            <div>
                <h1 className="text-2xl my-24 font-bold text-center">Page Not Found</h1>
                <p className="text-center">404</p>
            </div>
        );
    }
}

export default ErrorElement;
