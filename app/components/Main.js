{/* Comment */}

import React from 'react';
import CreateMeal from "./create-meal";
import MealHistory from "./meal-history";
import Stats from "./stats";


const meals = {
    history: [],
    lsKey: "history",
    populate() {
        this.history = this.get();
    },
    get () {
        try {
            return JSON.parse(localStorage.getItem(this.lsKey)) || []
        } catch (e) {}
        return [];
    },
    save () {
        localStorage.setItem(this.lsKey, JSON.stringify(this.history));
    },
    add (obj) {
        this.history.push(obj);
        this.save();
    },
}

meals.populate();

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            history: meals.history
        };
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron text-center">
                        <h1>Serving Saver</h1>
                    </div>
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Stats</h3>
                            </div>
                            <div className="panel-body text-center">
                                <Stats
                                   history={this.state.history} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Enter a Meal</h3>
                            </div>
                            <div className="panel-body text-center">
                                <CreateMeal
                                    createMeal={this.createMeal.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Meal History</h3>
                            </div>
                            <div className="panel-body text-center">
                                <MealHistory 
                                    history={this.state.history}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    createMeal (meal, description, veg, protein, fat, carb, drink, day) {

        day = new Date().getDay()
        meal = meal.trim();
        description = description.trim();
        if (!meal) { return; }
        if (!description) { return; }
        if (!veg) { return; }
        if (!protein) { return; }
        if (!fat) { return; }
        if (!carb) { return; }
        if (!drink) { return; }
        meals.add({
            meal, 
            description,
            veg, 
            protein,
            fat,
            carb,
            drink,
            date: Date(),
            day: day
        });
        this.setState({ history: this.state.history });
    }


}


export default Main;
