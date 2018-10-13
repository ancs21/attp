import React, { Fragment } from 'react';

export default function (props) {
	return (

		<Fragment>
			<div className="mdl-cell mdl-cell--6-col">
				<div className="demo-card-wide mdl-shadow--2dp ">
						
					<img width="100%" src="https://firebasestorage.googleapis.com/v0/b/attp-8def0.appspot.com/o/product%2F589415708-612x612.jpg?alt=media&token=2a2138a7-0ade-4fa8-87b1-273913a19f02"/>
			
                    <br></br>
                    <br></br>
                    <button type="button" class="mdl-chip" style={{margin:"0 45% auto"}}>
                        <span class="mdl-chip__text">Add Photo</span>
                    </button>
					<div className="mdl-card__title" style={{justifyContent: "space-between"}}>
	
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" id="productName"/>
                            <label class="mdl-textfield__label" for="productName">Product Name</label>
                        </div>
					<span className="mdl-chip mdl-color--green mdl-color-text--white" id="demo-menu-lower-right" >
    				<span className="mdl-chip__text">Product Type</span>
					<a href="#" className="mdl-chip__action" style={{color: "white", opacity:"100"}}><i className="material-icons">check</i></a>
					</span>
                    <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect"
                        for="demo-menu-lower-right">
                    <li class="mdl-menu__item">Fruits</li>
                    <li class="mdl-menu__item">Vegetables</li>
                    <li class="mdl-menu__item">Others</li>
            
                    </ul>
					</div>
                    
					<div className="mdl-card__supporting-text">
					<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{width: "100%"}}>
                            <input class="mdl-textfield__input" type="text" id="productShortDesc"/>
                            <label class="mdl-textfield__label" for="productShortDesc">Product's Short Description</label>
                        </div>
					</div>
					<div className="mdl-card__actions mdl-card--border" style={{padding:"16px"}}>

						 <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{width: "70%"}}>
                            <input class="mdl-textfield__input" type="text" id="yourAddress"/>
                            <label class="mdl-textfield__label" for="yourAddress">Your Address</label>
                        </div>
                        &nbsp;
                        <button class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                        <i class="material-icons">my_location</i>
                        </button>
                        <br></br>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="phoneNumber"/>
                            <label class="mdl-textfield__label" for="phoneNumber">Your phone Number</label>
                            <span class="mdl-textfield__error">Input is not a phone number!</span>
                        </div>
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
                            <span class="mdl-list__item-secondary-action">
                            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                                <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" />
                            </label>
                            </span>
						
						</li>
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-icon">keyboard_arrow_right</i>
							<span>Aaron Paul</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
                            <span class="mdl-list__item-secondary-action">
                            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-2">
                                <input type="checkbox" id="list-checkbox-2" class="mdl-checkbox__input" />
                            </label>
                            </span>
							
						</li>
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-icon">keyboard_arrow_right</i>
							<span>Bob Odenkirk</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
                            <span class="mdl-list__item-secondary-action">
                            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-3">
                                <input type="checkbox" id="list-checkbox-3" class="mdl-checkbox__input" />
                            </label>
                            </span>
							
						</li>
                        <li className="mdl-list__item">
						<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{width:"100%"}}>
							<textarea className="mdl-textfield__input" type="text" rows= "5" style={{width:"100%"}} id="comments"></textarea>
							<label className="mdl-textfield__label" for="schools">Additional Description</label>
						</div>
						</li>
						</ul>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={{margin:"0 50% auto"}}>
  							Sell Now
						</button>
					</div>
					
				</div>
				<br></br>
				</div>
		</Fragment>
		
		
		
	);
}
