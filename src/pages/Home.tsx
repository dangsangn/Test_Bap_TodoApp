import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getListTaskApi } from "../apis"
import { TodoItem } from "../components"
import { useDispatch, useSelector } from "../store"
import { closeLoading, showLoading } from "../store/global"
import { getAllTasks } from "../store/tasks"

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { tasks } = useSelector((state) => state.tasks)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      dispatch(showLoading())
      const data = await getListTaskApi()
      dispatch(getAllTasks(data))
      dispatch(closeLoading())
    })()
  }, [dispatch])

  const handleRedirectAddPage = () => {
    navigate("/add")
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[400px] border p-2 rounded-md">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Todo App</h1>
          <button
            className="px-3 py-1 border rounded-md"
            onClick={handleRedirectAddPage}
          >
            Add Task
          </button>
        </div>
        <div className="mt-4 h-[70vh] overflow-y-auto pr-2">
          {!tasks.length && <p className="text-center mt-4">Let add a task!</p>}
          {tasks.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              status={item.status}
              dueDate={item.dueDate}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
