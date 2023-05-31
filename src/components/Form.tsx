import { FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { getTaskDetailApi, postTaskApi, updateTaskApi } from "../apis"

export const Form = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(async () => {
        const data = await getTaskDetailApi(Number(id))
        setTitle(data.title)
        setDescription(data.description)
        setDueDate(data.dueDate)
      })()
    }
  }, [id])

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault()
    if (!title) {
      toast.info("Please enter title")
      return
    }
    setLoading(true)
    const data = {
      title,
      description,
      dueDate,
    }
    if (id) {
      await updateTaskApi({
        data: {
          ...data,
        },
        id: +id,
      })
    } else {
      await postTaskApi({
        ...data,
        status: false,
      })
    }
    navigate("/")
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmitForm} className="w-[320px]">
      <div className="flex flex-col mb-2">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          placeholder="Enter title"
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="border rounded py-1 px-2 mt-1"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          placeholder="Enter description"
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="border rounded py-1 px-2 mt-1"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="dueDate">Due Date:</label>
        <input
          id="dueDate"
          placeholder="Enter due date"
          type="text"
          name="dueDate"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          className="border rounded py-1 px-2 mt-1"
        />
      </div>
      <div>
        <button
          type="submit"
          className="px-4 py-1 border rounded min-w-[100px] h-[34px] bg-blue-500  text-white grid place-items-center"
        >
          {loading ? (
            <svg
              className="animate-spin h-4 w-4 border-2 border-slate-300 border-l-black rounded-full "
              viewBox="0 0 24 24"
            />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  )
}
