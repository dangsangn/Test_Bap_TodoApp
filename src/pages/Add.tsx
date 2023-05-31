import { Form } from "../components/Form"
import {Link} from 'react-router-dom'

const Add = () => {
  return (
    <div className="w-[320px] h-[100vh] mx-auto flex flex-col items-center justify-center">
      <Link className="w-full text-start" to="/">Back</Link>
      <h1 className="text-3xl font-bold">Add New Task </h1>
      <Form />
    </div>
  )
}

export default Add
