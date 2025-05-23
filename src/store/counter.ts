import { create } from "zustand";

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state: CounterState) => ({ count: state.count + 1 })),
    decrement: () => set((state: CounterState) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));

export default useStore;