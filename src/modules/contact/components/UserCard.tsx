import clsx from "clsx"
import Button from "components/Button"
import { User } from "modules/users/interfaces/user"
import { Link } from "react-router-dom"

interface UserCardProps {
  data: User
}

export default function UserCard({ data }: UserCardProps) {
  return (
    <div
      className={clsx(
        "p-4 flex flex-col items-center gap-y-4 bg-gray-50 border border-gray-200 rounded-xl",
      )}
    >
      <img
        src="https://picsum.photos/200"
        alt=""
        className="h-20 rounded-full"
      />
      <div className="font-medium">{data?.username}</div>
      <div className="flex gap-2">
        <Link to={`/messages/${data.id}`}>
          <Button colorScheme="primary">Nhắn tin</Button>
        </Link>
        <Button>Chặn</Button>
      </div>
    </div>
  )
}
