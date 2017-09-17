import React from "react";

export default class MealHistory extends React.Component {
    renderItems () {
        return this.props.history.reverse().map((element, x) => {
            return (
                <article className="thumb" key={x}>
                    <h2>
                        {element.meal}
                        {element.description}
                        {element.veg}
                        {element.protein}
                        {element.fat}
                        {element.carb}
                        {element.drink}
                    </h2>
                    <h3>{element.date}</h3>
                </article>
            )
        });
    }
    render () {
        if (!this.props.history.length) {
            return <p>Enter a meal to get started</p>;
        }
        return (

                <div>{this.renderItems()}</div>

        )
    }
}
