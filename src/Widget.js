import React, {Component} from 'react';
import {makeWorkspace} from './Dashboard';
import firebase from 'firebase';
import 'firebase/database';

import logo from './res/images/Logo.png'
import gradesourceLogo from './res/images/GradeSource_logo.png'
import piazzaLogo from './res/images/Piazza_logo.png'
import autograderLogo from './res/images/Autograder_Logo.png'
import gradescopeLogo from './res/images/Gradescope_logo.png'


import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import ReactDOM from "react-dom";

var courseName;
var widgetNum = 0;

/*makeWidget() {
    //var app = firebase.initializeApp(FIREBASE_CONFIG);
    var course = document.getElementById("course").value;

    firebase.auth().onAuthStateChanged( user => {
        if (user) {
            const userReference = firebase.database().ref(`users/${user.uid}`);

            var data = {
                name:course,
                widgets:""
            }

            var wid = firebase.database().ref('workspaces').push(data).getKey();

            userReference.child("workspace").child(wid).set(course);
        }
        window.location.reload();
    });
}*/

class Widget extends Component {
    constructor(name) {
        { /*  super(prop); */ }
        super();
        courseName = name;

        this.myRef = React.createRef();

       /* this.state = {
            urls: ['https://piazza.com/', 'http://www.gradesource.com/reports/7/29889/index.html', 'https://gradescope.com/embed/', 'https://autograder.ucsd.edu/', 'https://www.youtube.com/embed/dQw4w9WgXcQ'],
            website: ['Piazza', 'GradeSource', 'GradeScope', 'AutoGrader', 'Other'],
            widgetID: ['0', '1', '2', '3', '4']
        } */

        this.state = {
            urls: new Array(),
            website: new Array(),
            widgetID: new Array()
        }

        this.makeWidget = this.makeWidget.bind(this);

    }

    smallWidget = () => {
        const element = this.myRef.current;
        console.log(element);
        const leftDiv = element.parentNode;
        console.log(leftDiv);
        const topDiv = leftDiv.parentNode;
        console.log(topDiv);
        const outerDiv = topDiv.parentNode;
        console.log(outerDiv);
        outerDiv.className = "";

        outerDiv.classList.add('w-container-out');
        outerDiv.classList.add('col-md-4');

    }

    mediumWidget = () => {
        const element = this.myRef.current;
        console.log(element);
        const leftDiv = element.parentNode;
        console.log(leftDiv);
        const topDiv = leftDiv.parentNode;
        console.log(topDiv);
        const outerDiv = topDiv.parentNode;
        console.log(outerDiv);
        outerDiv.className = "";

        outerDiv.classList.add('w-container-out');
        outerDiv.classList.add('col-md-8');

    }

    largeWidget = () => {
        const element = this.myRef.current;
        console.log(element);
        const leftDiv = element.parentNode;
        console.log(leftDiv);
        const topDiv = leftDiv.parentNode;
        console.log(topDiv);
        const outerDiv = topDiv.parentNode;
        console.log(outerDiv);
        outerDiv.className = "";
        outerDiv.classList.add('w-container-out');
        outerDiv.classList.add('col-md-12');
    }



    makeWidget() {
        var courseType;
        var webURL = document.getElementById("webURL").value;

        //Make sure url is lowercase for comparisons
        webURL = webURL.toLowerCase();

        //Assign coursetype
        if (webURL.indexOf('gradesource') == 0) {
            courseType = "GradeSource";
        }

        else if (webURL.indexOf('gradescope') == 0) {
            courseType = "GradeScope";
        }

        else if (webURL.indexOf('autograder') == 0) {
            courseType = "AutoGrader";
        }
        else if (webURL.indexOf('piazza') == 0) {
            courseType = "Piazza";
        }
        else {
            courseType = "Other";
        }

        //Check if "http://" if not add it
        if (webURL.indexOf('http://') != 0) {
            webURL = 'http://' + webURL;
        }

        this.setState({ website: this.state.website.concat(courseType) });
        this.setState({ urls: this.state.urls.concat(webURL) });
        this.setState({ widgetID: this.state.widgetID.concat(widgetNum) });

        //Increment widget count for unique ID for modal popup identifier.
        widgetNum++;
    }


    render(){


        return(

            <div className="container-fluid">
                <div className="row">
                    {/* Load/render widgets you see on screen intially */}
                    {/* Modals (see below this) and widgets are connected via id's */}
                    {/* I imported a library for easy if/if-else/then etc.. tags */}
                    {this.state.urls.map((url, arrayIndex) => {
                        return (
                            <If condition={this.state.website[arrayIndex] == 'GradeSource'}>

                                {/* If Gradesource, display scraped data from secret number */}
                            <Then>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 w-container-out">
                                <div className="w-top">
                                    <div className="w-top-l"><i className="far fa-times-circle"></i></div>
                                    <div className="w-top-r"><i className="far fa-edit"></i> [] [ ] [   ]</div>
                                </div>
                                <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                     data-target={'#' + this.state.widgetID[arrayIndex]}>
                                    <img className="widgetLogo" src={gradesourceLogo}/>
                                </div>
                            </div>
                            </Then>


                                {/* If piazza, just show logo */}
                                <ElseIf condition={this.state.website[arrayIndex] == 'Piazza'}>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 w-container-out">
                                        <div className="w-top">
                                            <div className="w-top-l"><i className="far fa-times-circle"></i></div>
                                            <div className="w-top-r"><i className="far fa-edit"></i> [] [ ] [   ]</div>
                                        </div>
                                        <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                             data-target={'#' + this.state.widgetID[arrayIndex]}>
                                            <img className="widgetLogo" src={piazzaLogo}/>
                                        </div>
                                    </div>

                                </ElseIf>

                                {/* If Gradescope, just show logo */}
                                <ElseIf condition={this.state.website[arrayIndex] == 'GradeScope'}>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 w-container-out">
                                        <div className="w-top">
                                            <div className="w-top-l"><i className="far fa-times-circle"></i></div>
                                            <div className="w-top-r"><i className="far fa-edit"></i> <span onClick={this.smallWidget} ref={this.myRef}>[]</span> <span onClick={this.mediumWidget} ref={this.myRef}>[ ]</span><span onClick={this.largeWidget} ref={this.myRef}>[ ]</span></div>
                                        </div>
                                        <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                             data-target={'#' + this.state.widgetID[arrayIndex]}>
                                            <img className="widgetLogo" src={gradescopeLogo}/>
                                        </div>
                                    </div>

                                </ElseIf>


                                {/* If Autograder, just show logo */}
                                <ElseIf condition={this.state.website[arrayIndex] == 'AutoGrader'}>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12  w-container-out">
                                        <div className="w-top">
                                            <div className="w-top-l"><i className="far fa-times-circle"></i></div>
                                            <div className="w-top-r"><i className="far fa-edit"></i> [] [ ] [   ]</div>
                                        </div>
                                        <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                             data-target={'#' + this.state.widgetID[arrayIndex]}>
                                            <img className="widgetLogo" src={autograderLogo}/>
                                        </div>
                                    </div>

                                </ElseIf>



                                {/* If Other website, just show CSEHUB logo */}
                                <ElseIf condition={this.state.website[arrayIndex] == 'Other'}>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12  w-container-out">
                                        <div className="w-top">
                                            <div className="w-top-l"><i className="far fa-times-circle"></i></div>
                                            <div className="w-top-r"><i className="far fa-edit"></i> [] [ ] [   ]</div>
                                        </div>
                                        <div id="e" draggable="true" className="w-container" data-toggle="modal"
                                             data-target={'#' + this.state.widgetID[arrayIndex]}>
                                            <img className="widgetLogo" src={logo}/>
                                        </div>
                                    </div>

                                </ElseIf>
                        </If>
                        )
                    })}
                </div>


         {/* Load widget modals at the bottom of screen with pre-loaded iframes. Initially set to display:'none' until user clicks on widget */}
         {/* Modals and widgets are connected via id's */}
        {this.state.urls.map((url, Index) => {
            return (
                <div key={Index} className="modal fade" id={this.state.widgetID[Index]} tabIndex="-1" role="dialog"
                     aria-labelledby={this.state.widgetID[Index]}  aria-hidden="true">
                    <div className="modal-dialog widget-modal modal-dialog-centered" role="document">
                        <div className="modal-content widget-modal-h">
                            <div className="modal-body widget-modal-h">


                                <If condition={this.state.website[Index] == 'GradeScope'}>
                                    <Then>
                                        <p>SEE HOW GRADESCOPE BLOCKS THE IFRAME FROM POPPING UP???? </p>
                                        <a target="_blank" href="https://stackoverflow.com/a/35790513">Click this text to learn more....</a>
                                    </Then>
                                </If>


                                <iframe className="modal-full" src={this.state.urls[Index]}
                                        frameBorder="0" allow="autoplay; encrypted-media"></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            )
        })}

                {/* Add Website Modal */}
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
                                               placeholder="CSE 105"/>
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

                {/* Add Widget Modal */}
                <div className="modal fade" id="modal-addWidget" tabIndex="-1" role="dialog"
                     aria-labelledby="AddWebsite" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">New Widget:</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <form>

                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">URL: </label>
                                            <input id="webURL" type="text" className="form-control"
                                                   placeholder=""/>
                                        </div>
                                    </form>

                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel
                                </button>
                                <button onClick={this.makeWidget} type="button" className="btn btn-primary" data-dismiss="modal">Add Widget</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        );
    }
}

export default Widget;
