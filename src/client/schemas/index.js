import { Schema, arrayOf } from 'normalizr'

const doctorSchema = new Schema('doctors')

export default  {
  DOCTOR: doctorSchema,
  DOCTOR_ARRAY: arrayOf(doctorSchema)
}
