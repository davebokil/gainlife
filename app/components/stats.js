import React from "react";

export default class Stats extends React.Component {
    mealStats () {
        // let stat = this.props.history.slice(-1)[0]
        let stats = this.props.history
        let datematch = new Date().getDay()
        let mealsToday = 0
        let today = [], veg = [], carb = [], drink = [], fat = [], protein = []

        for (var i = 0; i < stats.length; i++) {
            if (datematch == stats[i].day) {
                today.push(stats[i])
            }
        }
        
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
            <h1>You had {mealsToday} meals today
            You had {veg} vegetables today
            You had {carb} carbs today
            You had {drink} drinks today
            You had {fat} fat today</h1>
            )
    }

    render () {
        if (!this.props.history.length) {
            return <p>Enter a meal to get started</p>;
        }
        return (
            
            <div>
                {this.mealStats()}
            </div>
            )
    }
}
