import { normalize } from 'normalizr'
import * as doctors from 'services/doctor'
import Schemas from '../schemas'
import {DOCTORS_REQUEST, DOCTORS_SUCCESS, DOCTORS_FAILURE} from '../constants/actiontypes'

export const doctorsRequest = () => {
  return {
    type: DOCTORS_REQUEST
  }
}
export const doctorsSuccess = (data) => {
  return {
    type: DOCTORS_SUCCESS,
    payload: data
  }
}
export const doctorsFailure = (err) => {
  return {
    type: DOCTORS_FAILURE,
    err
  }
}

export const fetchDoctors = () =>
  async (dispatch) => {
    dispatch(doctorsRequest())
    try {
      let data = await doctors.getDoctors()
      const normalized = normalize(data.result, Schemas.DOCTOR_ARRAY);
      console.log(normalized)
      dispatch(doctorsSuccess(normalized))

    } catch(e) {
      console.log(e)
      dispatch(doctorsFailure(e))
    }
  }
