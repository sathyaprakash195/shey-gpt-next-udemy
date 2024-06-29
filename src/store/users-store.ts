import { create } from 'zustand'

const usersGlobalStore = create((set) => ({
    loggedInUserData : null,
    setLoggedInUserData: (data:any) => set({loggedInUserData: data}),
}))

export default usersGlobalStore;