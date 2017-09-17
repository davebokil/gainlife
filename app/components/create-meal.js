import React from "react";

export default class CreateMeal extends React.Component {
    render () {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Meal Name</label>
                    <div className="col-10">
                        <input className="form-control" type="text" ref="mealName" list="mealName" />
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
                        <input className="form-control" placeholder="Spaghetti and Meatballs" type="text" ref="mealDescription" />
                    </div>
                </div>

                <h4>Enter the number of servings for each food group:</h4>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Vegetables</label>
                    <div className="col-10">
                        <input className="form-control" type="number" ref="veg" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Protein</label>
                    <div className="col-10">
                        <input className="form-control" type="number" ref="protein" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Fat</label>
                    <div className="col-10">
                        <input className="form-control" type="number" ref="fat" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Carb</label>
                    <div className="col-10">
                        <input className="form-control" type="number" ref="carb" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Drink</label>
                    <div className="col-10">
                        <input className="form-control" type="number" ref="drink" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
    onSubmit (e) {
        this.props.createMeal(this.refs.mealName.value, this.refs.mealDescription.value, this.refs.veg.value, this.refs.protein.value, this.refs.fat.value, this.refs.carb.value, this.refs.drink.value );
        this.refs.mealName.value = "";
        this.refs.mealDescription.value = "";
        e.preventDefault();
    }
}


