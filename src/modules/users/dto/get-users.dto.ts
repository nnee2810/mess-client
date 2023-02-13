import { PaginationDto } from "dto/pagination.dto"
import { RelationType } from "modules/relations/interfaces/relation"

export interface GetUsersDto extends PaginationDto {
  username?: string
  relation?: RelationType
}
