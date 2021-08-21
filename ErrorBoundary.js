// react.js.org/docs/erroe-boundaries.html

import { Link, Redirect } from '@gatsbyjs/reach-router';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, redirect: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error ", error, info);
    }

    componentDidMount() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 6000)
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/" noThrow />;
        }
        if (this.state.hasError) {
            return (
                <h1>
                    Error To Fetching Video
                    <Link to="/">Snap Here</Link>
                    {
                        ""
                    }
                    to go back the Search Page.. or wait for a seconds
                </h1>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;