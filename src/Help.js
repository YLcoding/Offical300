import './App.css'
import logo from './res/images/Logo.png'
import Widget from './Widget.js';
import {Header, Widget1} from './Header';
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import firebase from 'firebase';
import 'firebase/database';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'
import {makeWorkspace} from "./Dashboard";


export class Help extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Router>
            <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-8 offset-md-2 settings-wrapper">
                            <div className="settings-outer">
                                <div className="settings-inner">
                                    <div><h3>Help/Tutorial</h3></div>
                                    <p>Place tutorial video below:</p>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Add Workspace Modal */}
                    <div className="modal fade" id="modal-addWebsite" tabIndex="-1" role="dialog"
                         aria-labelledby="AddWebsite" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Add New Workspace:</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Title: </label>
                                            <input id="course" type="text" className="form-control"
                                                   placeholder="ex: CSE 110"/>
                                        </div>
                                    </form>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel
                                    </button>
                                    <button onClick={makeWorkspace} type="button" className="btn btn-primary" data-dismiss="modal">Save Course</button>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            </Router>
        );
    }
}

export default Help;