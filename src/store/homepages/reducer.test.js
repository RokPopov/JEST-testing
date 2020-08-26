import reducer from "./reducer";
import { FETCH_HOMEPAGES_SUCCESS } from "./actions";

describe("homepageReducer", () => {
  const initialState = [];

  describe("if given state === undefined and an action with unknown action type", () => {
    test("returns the initial state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a FETCH_HOMEPAGES_SUCCESS action type", () => {
    test("returns a new state with the payload array included", () => {
      const homepages = [{}, {}];
      const action = { type: FETCH_HOMEPAGES_SUCCESS, payload: homepages };
      const newState = reducer(initialState, action);
      expect(newState).toHaveLength(homepages.length);
      expect(newState).toEqual(homepages);
    });
  });
});
