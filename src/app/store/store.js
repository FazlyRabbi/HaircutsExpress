import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  category: null,
  latest18:null,

  fetchRepo: async (page) => {
    set({ loading: true, error: null });

    try {
      if (page === undefined) {
        // Check if page is undefined
        const response = await axios.get(`${process.env.API_URL}/repo`);
        set({ data: response.data, loading: false });
      } else {
        const response = await axios.get(
          `${process.env.API_URL}/repo?page=${page}`
        );
        set({ data: response.data, loading: false });
      }
    } catch (error) {
      set({ error, loading: false });
    }
  },

  fetchCategory: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(`${process.env.API_URL}/category`);

      set({ category: response.data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  fethLatest: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(`${process.env.API_URL}/getletest`);

      set({ latest18: response.data.data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },


}));

export default useStore;
