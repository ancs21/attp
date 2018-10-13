import React, { Fragment } from 'react';
import style from './index.sass';

export default function (props) {
	return (

		<Fragment>
			<div className="mdl-cell mdl-cell--6-col">
				<div className="demo-card-wide mdl-shadow--2dp ">
						
					<img width="100%" src="https://firebasestorage.googleapis.com/v0/b/attp-8def0.appspot.com/o/product%2F589415708-612x612.jpg?alt=media&token=2a2138a7-0ade-4fa8-87b1-273913a19f02"/>
			
					<div className="mdl-card__title" style={{justifyContent: "space-between"}}>
					<h2 className="mdl-card__title-text">Product Name</h2>
					<span className="mdl-chip mdl-color--green mdl-color-text--white" >
    				<span className="mdl-chip__text">Product Type</span>
					<a href="#" className="mdl-chip__action" style={{color: "white", opacity:"100"}}><i className="material-icons">check</i></a>
					</span>
					</div>
					<div className="mdl-card__supporting-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris sagittis pellentesque lacus eleifend lacinia...
					</div>
					<div className="mdl-card__actions mdl-card--border">

						<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
							BUY THIS
						</a>
					</div>
				</div>
				<br></br>
				<div className="demo-card-wide mdl-shadow--2dp">
					<div className="mdl-card__title">
					<h2 className="mdl-card__title-text">Description</h2>
					</div>
					<div className="mdl-card__supporting-text">
					<ul className="mdl-list">
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-icon">keyboard_arrow_right</i>
							<span>Bryan Cranston</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
						
						</li>
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-icon">keyboard_arrow_right</i>
							<span>Aaron Paul</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
							
							
						</li>
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-icon">keyboard_arrow_right</i>
							<span>Bob Odenkirk</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
							
						</li>
						</ul>
					</div>
					
				</div>
				<br></br>
				<div className="demo-card-wide mdl-shadow--2dp">
					<div className="mdl-card__title">
					<h2 className="mdl-card__title-text">Comments</h2>
					</div>
					<div className="mdl-card__supporting-text">
					<ul className="mdl-list" widt="100%">
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-avatar">person</i>
							<span>Bryan Cranston</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
							<span className="mdl-list__item-secondary-content">
							<span className="mdl-list__item-secondary-info">Rate</span>
							<a className="mdl-list__item-secondary-action" href="#">5&nbsp;<i className="material-icons">star</i></a>
							</span>
						</li>
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-avatar">person</i>
							<span>Aaron Paul</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
							<span className="mdl-list__item-secondary-content">
							<a className="mdl-list__item-secondary-action" href="#">5&nbsp;<i className="material-icons">star</i></a>
							</span>
						</li>
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-avatar">person</i>
							<span>Bob Odenkirk</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
							<span className="mdl-list__item-secondary-content">
							<a className="mdl-list__item-secondary-action" href="#">5&nbsp;<i className="material-icons">star</i></a>
							</span>
						</li>
						<li className="mdl-list__item">
						<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{width:"100%"}}>
							<textarea className="mdl-textfield__input" type="text" rows= "5" style={{width:"100%"}} id="comments"></textarea>
							<label className="mdl-textfield__label" for="schools">Your comments</label>
						</div>
						<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
  							Post
						</button>
						</li>
						</ul>
					</div>
					
					</div>
			</div>
		</Fragment>
		
		
		
	);
}
