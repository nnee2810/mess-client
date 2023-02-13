import Field from "components/field"
import Loading from "components/loading/Loading"
import { FormProvider } from "react-hook-form"
import UserCard from "../components/UserCard"
import { useContactSearch } from "../hooks/useContactSearch"

export default function ContactSearch() {
  const { methods, handleSubmit, isLoading, data } = useContactSearch()

  return (
    <div className="p-6 space-y-6">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <Field
            variant="text"
            name="username"
            placeholder="Tìm kiếm bạn bè..."
            className="max-w-md mx-auto block"
          />
        </form>
      </FormProvider>
      <div className="grid grid-cols-6 gap-4">
        {data?.data?.map((user) => (
          <UserCard data={user} key={user.id} />
        ))}
      </div>
      {isLoading && <Loading />}
    </div>
  )
}
