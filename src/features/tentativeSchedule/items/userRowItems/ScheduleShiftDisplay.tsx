import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { selectCurrentHouse } from '@/features/auth/authSlice'
import { selectShiftById } from '@/features/shift/shiftApiSlice'
import { House } from '@/types/schema'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import { ShiftAssignmentCard } from '@/features/userAssignment/cards/ShiftAssignmentCard'

type ScheduleShiftDisplayProps = {
  shiftId: string
  handleClick: () => void
}

const ScheduleShiftDisplay = (props: ScheduleShiftDisplayProps) => {
  const { shiftId, handleClick } = props
  const theme = useTheme()
  const authHouse = useSelector(selectCurrentHouse) as House

  const shift = useSelector((state: RootState) =>
    selectShiftById()(state, shiftId, authHouse.id)
  )

  // const [open, setOpen] = useState(false)

  // const handleClose = () => {
  //   setOpen(false)
  // }
  const handleEditShift = (shiftId: string) => {}

  return shift ? (
    <Box
      // variant="outlined"
      elevation={3}
      component={Paper}
      sx={{
        backgroundColor: '#232323',
        color: '#ffffff',
        marginBottom: 1,
        alignContent: 'center',
      }}
      onClick={handleClick}
    >
      <Box>
        <Typography textAlign={'center'} textTransform={'capitalize'}>
          {shift.name}
        </Typography>
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <Typography variant="caption">{shift.timeWindowDisplay}</Typography>
      </Box>
      <Box style={{ textAlign: 'center' }}>
        <Typography
          textAlign={'center'}
          variant="caption"
        >{`Credit: ${shift.hours}hrs`}</Typography>
      </Box>
      {/* <ShiftAssignmentCard
        shiftId={shiftId}
        selectedDay={shift.assignedDay ? shift.assignedDay : 'Day'}
        handleClose={handleClose}
        // handleEditShift={handleEditShift}
        open={open}
      /> */}
    </Box>
  ) : (
    <></>
  )
}

export default ScheduleShiftDisplay
