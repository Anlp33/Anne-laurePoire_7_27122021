class Recipes {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.description = data.description;
    this.time = data.time;
    // this.ingredient = data.ingredient;
    // this.quantity = data.quantity;
    // this.unit = data.unit;
    // this.appliance = data.appliance;
    // this.ustensils = data.ustensils;
  }

  createHtml() {
    return `
    <article class="box">
       <div class="image">
       </div>
      <div class="text">
        <div class="title">
          <div class="name">${this.name}</div>
          <div class="time"><i class="far fa-clock"></i>${this.time} min</div>
        </div>

        <div class="details">
          <div class="ingredients">
         ${this.ingredients
           .map(
             (ingredients) =>
               ingredients.ingredient +
               ": " +
               ingredients.quantity +
               ingredients.unit +
               "<br>"
    )
           .join("")}
          

          </div>

          <div class="description">${this.description}</div>
        </div>

      </div>
      </article>
        `;
  }
}