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
          <div>
              <div id="preloader">
                  <div className="loader"></div>
              </div>
              <header id="home" className="home-section">
                  <div className="header-top-area">
                      <div className="container">
                          <div className="row">
                              <div className="col-sm-3">
                                  <div className="logo">
                                      <a href="#home">Servings</a>
                                  </div>
                              </div>
                              <div className="col-sm-9">
                                  <div className="navigation-menu">
                                      <div className="navbar">
                                          <div className="navbar-header">
                                              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                                  <span className="sr-only">Toggle navigation</span>
                                                  <span className="icon-bar"></span>
                                                  <span className="icon-bar"></span>
                                                  <span className="icon-bar"></span>
                                              </button>
                                          </div>
                                          <div className="navbar-collapse collapse">
                                              <ul className="nav navbar-nav navbar-right">
                                                  <li><a className="smoth-scroll" href="#statistics">Today's Statistics</a>
                                                  </li>
                                                  <li><a className="smoth-scroll" href="#createmeal">Enter a Meal</a>
                                                  </li>
                                                  <li><a className="smoth-scroll" href="#mealhistory">Meal History</a>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </header>
              <div className="jumbotron text-center">
                  <h3 id="typing"><span className="typing"></span></h3>
              </div>
              <div id="statistics">
                  <Stats history={this.state.history} />
              </div>
              <div id="createmeal">
                  <CreateMeal createMeal={this.createMeal.bind(this)} />
              </div>
              <div id="mealhistory">
                  <MealHistory history={this.state.history} />
              </div>
              <footer className="footer-section">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-4 text-left">
                              <p><span><a href="https://github.com/davebokil/gainlife">Github Project Link</a></span></p>
                          </div>
                          <div className="col-md-4 text-center">
                              <p>© Dave Bokil 2017</p>
                          </div>
                          <div className="col-md-4 text-right">
                              <p><span><a href="http://davebokil.com/">Dave's Portfolio</a></span></p>
                          </div>
                      </div>
                  </div>
              </footer>
          </div>

        );
    }

    createMeal (meal, description, veg, protein, fat, carb, drink, day) {

        day = new Date().getDay()
        meal = meal.trim();
        description = description.trim();
        if (!meal) { return (alert('Fill out all fields before submitting')); }
        if (!description) { return (alert('Fill out all fields before submitting')); }
        if (!veg) { return (alert('Fill out all fields before submitting')); }
        if (!protein) { return (alert('Fill out all fields before submitting')); }
        if (!fat) { return (alert('Fill out all fields before submitting')); }
        if (!carb) { return (alert('Fill out all fields before submitting')); }
        if (!drink) { return (alert('Fill out all fields before submitting')); }
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
