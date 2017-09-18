import React from "react";

export default class MealHistory extends React.Component {
    renderItems () {
        return this.props.history.reverse().map((element, x) => {
            return (

            <div className="col-md-4 col-sm-6" key={x}>
                <div className="services-detail">
                    <i className="fa fa-cutlery color-1"></i>
                    <h3>{element.meal}</h3>
                    <h4>{element.description}</h4>
                    <p>{element.date}</p>
                    <p>Vegetable Servings: <b>{element.veg}</b></p>
                    <p>Protein Servings: <b>{element.protein}</b></p>
                    <p>Fat Servings: <b>{element.fat}</b></p>
                    <p>Carb Servings: <b>{element.carb}</b></p>
                    <p>Drink Servings: <b>{element.drink}</b></p>
                </div>
            </div>



            )
        });
    }
    render () {
        if (!this.props.history.length) {
            return <div></div>;
        }
        return (

            <section id="services" className="services-section section-space-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="section-title">
                                <h2>Meal History</h2>
                            </div>
                        </div>
                    </div>
                <div className="row">{this.renderItems()}</div>
                </div>
            </section>
        )
    }
}
