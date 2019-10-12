meals = ["Baguette Tomate chevre",
    "Bouchées à la reine",
    "Burger",
    "Cake salé",
    "Cordons bleus",
    "Couscous boulette ratatouille semoule",
    "Croque-Monsieur",
    "Cannellonis",
    "Cannellonis ricotta epinard",
    "Chaussons pomme/chèvre",
    "Courgettes farcies à la mozza",
    "Croissant-jambon",
    "Enchilladas",
    "Endive-jambon",
    "Escalope",
    "Gratin dauphinois aux courgettes",
    "Gratin de légumes",
    "Lentilles",
    "Nuggets végétals",
    "Pâtes-Chorizo-Courgette",
    "Pâtes-pesto-ricotta",
    "Poisson-riz-légumes",
    "Purée-Carotte-Saucissse",
    "Pizzas",
    "Poivrons farcis",
    "Quinoatto",
    "Raclettes",
    "Raviolis frais",
    "Rissotto",
    "Salade poulet quinoa",
    "Soupe",
    "Tarte mozza tomates",
    "Tarte maroilles",
    "Tipiak Légumes secs - Dés de jambon / Poireaux / Carottes",
    "Welsh"
]

function generateWeekMeals() {
    var arr = meals;
    var size = 7;
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}
