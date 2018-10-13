import React, { Fragment } from 'react';

export default function (props) {
	return (

		<Fragment>
			<div className="mdl-cell mdl-cell--6-col">
				<div className="demo-card-wide mdl-shadow--2dp ">
						
					<img width="100%" src="https://firebasestorage.googleapis.com/v0/b/attp-8def0.appspot.com/o/product%2F589415708-612x612.jpg?alt=media&token=2a2138a7-0ade-4fa8-87b1-273913a19f02"/>
			
					<div className="mdl-card__title" style={{justifyContent: "space-between"}}>
					<h2 className="mdl-card__title-text">
Organic Agriculture and Climate Change</h2>
					<span className="mdl-chip mdl-color--green mdl-color-text--white" >
    				<span className="mdl-chip__text">Climate Change</span>
				
					</span>
					</div>
					<div className="mdl-card__supporting-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As global temperatures rise and weather patterns become more erratic, the intersection between climate change and agriculture is crucial to understanding the role agriculture plays in contributing to and mitigating global warming. Carbon sequestration, lower-input of fossil fuel dependant resources, and use of renewable energy all present opportunities for organic agriculture to lead the way in reducing energy consumption and mitigating the negative affects of energy emissions. Organic agriculture provides management practices that can help farmers adapt to climate change through strengthening agro-ecosystems, diversifying crop and livestock production, and building farmers’ knowledge base to best prevent and confront changes in climate.
                        <br></br>
                        <br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAO promotes organic agriculture as an alternative approach that maximizes the performance of renewable resources and optimizes nutrient and energy flows in agroecosystems. Life cycle assessments show that emissions in conventional production systems are always higher than those of organic systems, based on production area. Soil emissions of nitrous oxides and methane from arable or pasture use of dried peat lands can be avoided by organic management practices. Many field trials worldwide show that organic fertilization compared to mineral fertilization is increasing soil organic carbon and thus, sequestering large amounts of CO2 from the atmosphere to the soil. Lower greenhouse gas emissions for crop production and enhanced carbon sequestration, coupled with additional benefits of biodiversity and other environmental services, makes organic agriculture a farming method with many advantages and considerable potential for mitigating and adopting to climate change.
					</div>
					<div className="mdl-card__actions mdl-card--border" style={{justifyContent: "space-between"}}>

						<button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" style={{textAlign: "right"}}>
                        <i className="material-icons">sentiment_very_satisfied</i> &nbsp; Interesting
						</button>
                        
                        
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            <i class="material-icons">share</i> &nbsp;
                            Share
                            </button>
                        
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
				
					
						</li>
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-avatar">person</i>
							<span>Aaron Paul</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
				
						</li>
						<li className="mdl-list__item mdl-list__item--two-line">
							<span className="mdl-list__item-primary-content">
							<i className="material-icons mdl-list__item-avatar">person</i>
							<span>Bob Odenkirk</span>
							<span className="mdl-list__item-sub-title">62 Episodes</span>
							</span>
						</li>
						<li className="mdl-list__item">
						<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{width:"100%"}}>
							<textarea className="mdl-textfield__input" type="text" rows= "5" style={{width:"100%"}} id="comments"></textarea>
							<label className="mdl-textfield__label" for="comments">Your comments</label>
						</div>
						&nbsp;
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
