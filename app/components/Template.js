// Include React
import React from 'react';

// Component
class Main extends React.Component {



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
                                <h1>h1</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Enter a Meal</h3>
                            </div>
                            <div className="panel-body text-center">
                                <div className="form-group row">
                                    <label className="col-2 col-form-label">Meal Name</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" id="example-text-input" list="mealName" />
                                        <datalist id="mealName">
                                            <option>Breakfast</option>
                                            <option>Lunch</option>
                                            <option>Dinner</option>
                                            <option>Snack</option>
                                        </datalist>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-2 col-form-label">Meal Description</label>
                                    <div className="col-10">
                                        <input className="form-control" type="search" id="example-search-input" />
                                    </div>
                                </div>
                                <h4>Enter the number of servings for each food group:</h4>
                                <div className="form-group row">
                                    <label className="col-2 col-form-label">Vegetables</label>
                                    <div className="col-10">
                                        <input className="form-control" type="number" id="example-number-input" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-2 col-form-label">Protein</label>
                                    <div className="col-10">
                                        <input className="form-control" type="number" id="example-number-input" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-2 col-form-label">Fat</label>
                                    <div className="col-10">
                                        <input className="form-control" type="number" id="example-number-input" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-2 col-form-label">Carb</label>
                                    <div className="col-10">
                                        <input className="form-control" type="number" id="example-number-input" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-2 col-form-label">Drink</label>
                                    <div className="col-10">
                                        <input className="form-control" type="number" id="example-number-input" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Meal History</h3>
                            </div>
                            <div className="panel-body text-center">
                                <h1>h1</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export the component back for use in other files
export default Main;
