import TextInput from "components/field/TextInput"
import UserCard from "../components/UserCard"

export default function ContactBlocked() {
  return (
    <div className="p-6">
      <div className="flex justify-center">
        <TextInput className="max-w-md" placeholder="Tìm kiếm bạn bè..." />
      </div>
      <div className="mt-6 grid grid-cols-6 gap-6">
        {[1, 1, 1, 1, 1, 1, 1].map((i) => (
          <UserCard />
        ))}
      </div>
    </div>
  )
}
