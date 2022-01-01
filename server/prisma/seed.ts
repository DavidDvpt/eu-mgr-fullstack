import seedCategories from "./seed/seedCategories";
import seedTypes from "./seed/seedTypes";

// ajouter des promises pour executer les fonctions dans l'ordre
seedCategories();
seedTypes();
