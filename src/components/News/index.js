import React, { Fragment } from 'react';
import style from './style.sass';
import { Link } from 'react-router-dom'

export default function (props) {
	return (
		<Fragment>
			<div className="mdl-cell mdl-cell--3-col mdl-cell--2-col mdl-cell--4-col-phone">
            <div className="demo-card-wide mdl-shadow--2dp">
                <div className="mdl-card__title" style={{
                     color: "#fff",
                     height: "176px",
                     background: " linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('https://firebasestorage.googleapis.com/v0/b/attp-8def0.appspot.com/o/product%2F589415708-612x612.jpg?alt=media&token=2a2138a7-0ade-4fa8-87b1-273913a19f02')",
                     backgroundSize: "center / cover"
                }}>
                    <h2 className="mdl-card__title-text">Welcome</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link to="/newsDetail" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Read more
                    </Link>
                </div>
               
                </div>
			</div>
		</Fragment>

	);
}
