import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/index.css'

const Jumbotron = () => {
    return (
        <div className="container my-2">
            <div className="p-4 rounded bg-custom shadow text-start">
                <h1 className="display-4"><strong>A Warm Welcome</strong></h1>
                <p className="lead">Liber scriptus liber proferetur in quo totum continetur liber scriptus liber proferetur unde mundus judicetur Liber scriptus liber proferetur in quo totum continetur liber scriptus liber proferetur unde mundus judicetur Liber scriptus liber proferetur in quo totum continetur liber scriptus liber proferetur unde mundus judicetur  </p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg fs-14" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>
    );
}

export default Jumbotron;