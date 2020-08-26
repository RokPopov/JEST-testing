import {
  FETCH_HOMEPAGES_SUCCESS,
  fetchHomepagesSuccess,
  fetchHomepages,
} from "./actions";
import axios from "axios";

jest.mock("axios");

describe("#fetchHomepagesSuccess", () => {
  describe("if given an array of homepages", () => {
    test("should return an action object", () => {
      // test data simulating homepages
      const homepages = [{}, {}];
      // build action we expect to get back
      const expected = {
        type: FETCH_HOMEPAGES_SUCCESS,
        payload: homepages,
      };
      // call function
      const action = fetchHomepagesSuccess(homepages);
      // do assertion on function return
      expect(action).toEqual(expected);
    });
  });
});

describe("#fetchHomepages", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_HOMEPAGES_SUCCESS", async () => {
      const fakeHomepages = [{}, {}];
      const response = { data: { homepages: { rows: fakeHomepages } } };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce({ homepages: [] });
      await fetchHomepages()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(
        fetchHomepagesSuccess(fakeHomepages)
      );
      expect(getState).toHaveBeenCalledTimes(1);
    });
  });
});
