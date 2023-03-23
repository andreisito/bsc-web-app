import { RootState } from '@/store/store'
import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        memberNavState: { id: 'Schedule', tab: 0, path: '/account/member', active: 0 },
        managerNavState: { id: 'Schedule', tab: 0, path: '/account/manager', active: 0 },
        supervisorNavState: {
            id: 'Dashboard',
            tab: 0,
            path: '/account/supervisor',
            active: 0,
        },
        tabValue: 0,
    },
    reducers: {
        setMemberNavState: (state, action) => {
            state.memberNavState = action.payload
        },
        setManagerNavState: (state, action) => {
            state.managerNavState = action.payload
        },
        setSupervisorNavState: (state, action) => {
            state.supervisorNavState = action.payload
        },
        setTabValue: (state, action) => {
            state.tabValue = action.payload
        }
    },
})

export const { setMemberNavState, setManagerNavState, setSupervisorNavState, setTabValue } = usersSlice.actions

export const selectMemberNavState = (state:RootState) => state.users.memberNavState
export const selectManagerNavState = (state:RootState) => state.users.managerNavState
export const selectSupervisorNavState = (state:RootState) => state.users.supervisorNavState
export const selectTabValue = (state:RootState) => state.users.tabValue

export default usersSlice.reducer