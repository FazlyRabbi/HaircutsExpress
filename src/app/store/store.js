import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  timeSlots: [],
  service: [],
  loading: false,
  error: null,
  category: null,
  latest18: null,

  setTimeSlot: async (data) => {
    set({ timeSlots: data });
  },

  fetchService: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(`${process.env.API_URL}/service`);

      set({ service: response.data.data, loading: false });
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
