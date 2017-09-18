import React from "react";

export default class CreateMeal extends React.Component {
    render () {
        return (
            <section id="contact" className="contact-us section-space-padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-title">
                            <h2>Enter a Meal</h2>
                        </div>
                    </div>
                </div>


            <form onSubmit={this.onSubmit.bind(this)}>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Meal Name</label>
                    <div className="col-10">
                        <input className="form-control" placeholder="Choose from one of the options or enter a custom name for this meal." type="text" ref="mealName" list="mealName" />
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
                        <input className="form-control" placeholder="What did you eat?" type="text" ref="mealDescription" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Vegetables</label>
                    <div className="col-10">
                        <input className="form-control" placeholder="Enter the number of servings" type="number" ref="veg" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Protein</label>
                    <div className="col-10">
                        <input className="form-control" placeholder="Enter the number of servings" type="number" ref="protein" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Fats</label>
                    <div className="col-10">
                        <input className="form-control" placeholder="Enter the number of servings" type="number" ref="fat" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Carbohydrates</label>
                    <div className="col-10">
                        <input className="form-control" placeholder="Enter the number of servings" type="number" ref="carb" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-2 col-form-label">Drink</label>
                    <div className="col-10">
                        <input className="form-control" placeholder="Enter the number of servings" type="number" ref="drink" />
                    </div>
                </div>

                <div className="text-center"> 

                <button type="submit" className="button button-style button-style-dark button-style-icon fa fa-long-arrow-right text-center">Submit</button>

                </div>

            </form>
            </div>
            </section>
        );
    }
    onSubmit (e) {
        console.log('success')
        this.props.createMeal(this.refs.mealName.value, this.refs.mealDescription.value, this.refs.veg.value, this.refs.protein.value, this.refs.fat.value, this.refs.carb.value, this.refs.drink.value );
        this.refs.mealName.value = "";
        this.refs.mealDescription.value = "";
        this.refs.veg.value = "";
        this.refs.protein.value = "";
        this.refs.fat.value = "";
        this.refs.carb.value = "";
        this.refs.drink.value = "";
        e.preventDefault();
        document.getElementById('statistics').scrollIntoView({behavior: "smooth"});
    }
}


