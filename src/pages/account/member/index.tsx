import Loading from '@/components/shared/Loading'
import { selectCurrentRole, selectCurrentUser, setCurrentRole } from '@/features/auth/authSlice'
import { selectMemberNavState } from '@/features/user/usersSlice'
import { useRouter } from 'next/router'
// import ReduxTesting from '@/pages/ReduxTesting'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrivateLayout from '../Layout'

const MemberAccount = () => {
    const authUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
    const router = useRouter()
    const currentRole = useSelector(selectCurrentRole)
    const memberNavState = useSelector(selectMemberNavState)

    useEffect(() => {
        if (authUser) {
            if (!authUser.roles?.includes('supervisor')) {
                console.log('No supervisors here *********')
                dispatch(setCurrentRole(''))
                router.replace('/')
            } else {
                if (!currentRole) {
                    dispatch(setCurrentRole('supervisor'))
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authUser, currentRole])

    let content = null
    if (memberNavState.active === 0) {
        content = (
            <>
                <h1>Dashboare</h1>
            </>
        )
    } else if (memberNavState.active === 1) {
        content = <h1>Planner</h1>
    } else if (memberNavState.active === 2) {
        content = <h1>Profile</h1>
    }

    return (
        <React.Fragment>
            {currentRole ? <PrivateLayout>{content}</PrivateLayout> : <Loading />}
        </React.Fragment>
    )
}

export default MemberAccount