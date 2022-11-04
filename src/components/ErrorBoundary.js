import { render } from 'ejs'
import React, { Component } from 'react'

class ErrorBoundary extends Component() {
 componentDidCatch(error){

 }

    render() {
        return this.props.children;
    }
}

export default ErrorBoundary