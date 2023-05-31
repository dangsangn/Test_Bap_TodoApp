import { useNavigate } from "react-router-dom"
import { ITodo } from "../types"
import { deleteTaskApi, updateTaskApi } from "../apis"
import { useDispatch } from "../store"
import { deleteTask, updateTask } from "../store/tasks"

export const TodoItem = (props: ITodo) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleEdit = (id: number) => {
    navigate("edit/" + id)
  }

  const handleDelete = async (id: number) => {
    const isConfirm = confirm("Do you want to delete task " + props.title)
    if (isConfirm) {
      await deleteTaskApi(id)
      dispatch(deleteTask(id))
    }
  }

  const handleUpdateStatus = async () => {
    const data = await updateTaskApi({
      data: { status: !props.status },
      id: props.id,
    })
    dispatch(updateTask(data))
  }

  return (
    <div
      className={`flex justify-between pl-2 ${
        props.status && "border-l-4 border-l-blue-500"
      } mb-3 pb-1 border-b cursor-pointer`}
      onDoubleClick={handleUpdateStatus}
    >
      <div>
        <h3 className="text-xl font-medium">{props.title}</h3>
        <p className="text-sm">{props.dueDate}</p>
        <p>{props.description}</p>
      </div>
      <div className="flex items-start gap-1">
        <button
          className="px-4 py-1 border rounded min-w-[60px] bg-blue-500  text-white"
          onClick={() => handleEdit(props.id)}
        >
          Edit
        </button>
        <button
          className="px-4 py-1 border rounded min-w-[60px] bg-red-400 text-white"
          onClick={() => handleDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
