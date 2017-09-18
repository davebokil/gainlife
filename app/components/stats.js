import React from "react";
import Time from 'react-time';

export default class Stats extends React.Component {
    mealStats () {
        // let stat = this.props.history.slice(-1)[0]
        let stats = this.props.history
        let datematch = new Date().getDay()
        let mealsToday = 0
        let today = [], veg = [], carb = [], drink = [], fat = [], protein = []
        let now = new Date();


        for (var i = 0; i < stats.length; i++) {
            if (datematch == stats[i].day) {
                today.push(stats[i])
            }
        }

        if (today.length == 0) {
            return (
            <section className="statistics-section section-space-padding bg-cover text-center" data-stellar-background-ratio="0.3">
                <div className="container">
                <div className="section-title">
                        <h2>Today's Statistics</h2>
                        <p><Time value={now} format="MM/DD/YYYY"/></p>
                </div>
                    <div className="row">
                        <div className="statistics-center">
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-cutlery color-1"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Number of Meals Eaten</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-leaf color-4"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Servings of Vegetables</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-coffee color-5"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Drinks Consumed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="statistics-center">
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-check-square-o color-2"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Servings of Protein</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-tint color-3"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Servings of Fat</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-birthday-cake color-6"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Servings of Carbohydrates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )
        }

        else {
        
        for (var i = 0; i < today.length; i++) {
            veg.push(parseInt(today[i].veg))
            carb.push(parseInt(today[i].carb))
            drink.push(parseInt(today[i].drink))
            fat.push(parseInt(today[i].fat))
            protein.push(parseInt(today[i].protein))
        }
        
        mealsToday = today.length

        veg = veg.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
        carb = carb.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
        drink = drink.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
        fat = fat.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });
        protein = protein.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });


        console.log(today)
        console.log(mealsToday, veg, carb, drink, fat, protein)
        return (

            <section className="statistics-section section-space-padding bg-cover text-center" data-stellar-background-ratio="0.3">
                <div className="container">
                <div className="section-title">
                        <h2>Today's Statistics</h2>
                        <p><Time value={now} format="MM/DD/YYYY"/></p>
                </div>
                    <div className="row">
                        <div className="statistics-center">
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-cutlery color-1"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count={mealsToday} className="statistics-count">{mealsToday}</span></h5><span>Number of Meals Eaten</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-leaf color-4"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count={veg} className="statistics-count">{veg}</span></h5><span>Servings of Vegetables</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-coffee color-5"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count={drink} className="statistics-count">{drink}</span></h5><span>Drinks Consumed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="statistics-center">
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-check-square-o color-2"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count={protein} className="statistics-count">{protein}</span></h5><span>Servings of Protein</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-tint color-3"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count={fat} className="statistics-count">{fat}</span></h5><span>Servings of Fat</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-birthday-cake color-6"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count={carb} className="statistics-count">{carb}</span></h5><span>Servings of Carbohydrates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            )
        }
    }

    render () {
        let now = new Date();
        if (!this.props.history.length) {
            return (
            <section className="statistics-section section-space-padding bg-cover text-center" data-stellar-background-ratio="0.3">
                <div className="container">
                <div className="section-title">
                        <h2>Today's Statistics</h2>
                        <p><Time value={now} format="MM/DD/YYYY"/></p>
                </div>
                    <div className="row">
                        <div className="statistics-center">
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-cutlery color-1"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Number of Meals Eaten</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-leaf color-4"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Servings of Vegetables</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-coffee color-5"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Drinks Consumed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="statistics-center">
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-check-square-o color-2"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Servings of Protein</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-tint color-3"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Servings of Fat</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="statistics">
                                    <div className="statistics-icon"><i className="fa fa-birthday-cake color-6"></i>
                                    </div>
                                    <div className="statistics-content">
                                        <h5><span data-count="0" className="statistics-count">0</span></h5><span>Servings of Carbohydrates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                )
        }

        return (
            
            <div>
                {this.mealStats()}
            </div>
            )
    }
}
