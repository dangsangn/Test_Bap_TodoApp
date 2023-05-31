import { useSelector } from "../store"

export const Loading = () => {
  const { loading } = useSelector((state) => state.global)
  return (
    loading ? (
      <div className="w-full h-[100vh] bg-black opacity-25 z-10 fixed top-0 left-0 flex items-center justify-center">
        <svg
          className="animate-spin h-8 w-8 border-2 border-slate-300 border-l-black rounded-full "
          viewBox="0 0 24 24"
        />
      </div>
    ): <></>
  )
}
