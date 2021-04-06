import React, { Component } from 'react';

export default class MainFile extends Component {
    render() {
        return (
            <div className='Header-file'>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank">Features</a>&nbsp;
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank">Tour</a>&nbsp;
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank">About</a>&nbsp;
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank">Blog</a>&nbsp;
                <a className="Link-Data"
                    href="https://reactjs.org"
                    target="_blank">Sign-in</a>

                <h2>Free platform to manage your digital notes.</h2>
                <h3>FactualNote is a mature tool to annotate web pages and files.</h3>
                <h4>Start a discussion,rate the information and review it.</h4>
                <div className='Container'>
                <div className='Grid-1'>
                    From Web
                </div>
                <div className='Grid-2'>
                    Write your own
                </div>
                <div className='Grid-3'>From Documents</div>
                <div className='Grid-4'>Enter the Url</div>
</div>
            </div >
        )
    }
}