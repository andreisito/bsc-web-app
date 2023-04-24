import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { EntityId } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserById, useGetUsersQuery } from '../features/user/userApiSlice'
import { RootState } from '@/store/store'
import { User } from '@/types/schema'
import CloseButton from './CloseButton'
import { selectSelectedUserId } from './userAssignmentSlice'
import { useEffect } from 'react'

const SelectedUserComponent = ({
  handleClick,
}: {
  handleClick: () => void
}) => {
  // TODO: figure out why we needed to query the users here and hopefully remove it?
  const { data: users } = useGetUsersQuery({})
  const selectedUserId = useSelector(selectSelectedUserId)

  const user: User = useSelector(
    (state: RootState) =>
      selectUserById(state, selectedUserId as EntityId) as User
  )

  useEffect(() => {
    console.log('UserID: ', selectedUserId)
    console.log('User: ', user)
  }, [user, selectedUserId])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container bgcolor={'#D1FAE5'}>
        <Grid xs={'auto'} md={'auto'} lg={'auto'}>
          {user && selectedUserId ? (
            <Typography>
              {user.preferredName ? user.preferredName : user.displayName}
            </Typography>
          ) : (
            <Typography>No selected user</Typography>
          )}
        </Grid>
        <Grid smOffset={'auto'} mdOffset={'auto'} lgOffset={'auto'}>
          {selectedUserId ? <CloseButton handleClick={handleClick} /> : null}
        </Grid>
      </Grid>
    </Box>
  )
}
export default SelectedUserComponent
