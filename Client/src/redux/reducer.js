import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions-type';

const initialState = {
  myFavorites: [],
  allcharacterFav: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allcharacterFav, payload],
        allcharacterFav: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
      };

    case FILTER:
      const allcharacterFavFiltered = state.allcharacterFav.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: allcharacterFavFiltered,
      };

    case ORDER:
      const allcharacterFavCopy = [...state.allcharacterFav];
      return {
        ...state,
        myFavorites:
          payload === 'A'
            ? allcharacterFavCopy.sort((a, b) => a.id - b.id)
            : allcharacterFavCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
