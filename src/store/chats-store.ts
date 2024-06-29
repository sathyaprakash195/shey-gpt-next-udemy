import { create } from 'zustand'

const chatsGlobalStore = create((set) => ({
    selectedChat : null,
    setSelectedChat: (data:any) => set({selectedChat: data}),
    userChats : [],
    setUserChats: (data:any) => set({userChats: data}),
}))

export default chatsGlobalStore;