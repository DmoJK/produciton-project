import { memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Text } from "shared/ui/Text/Text"
import cls from "./CommentList.module.scss"
import { Comment } from "../../model/types/comment"
import { CommentCard } from "../CommentCard/CommentCard"

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation()
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              className={cls.comment}
              comment={comment}
              isLoading={isLoading}
            />
          ))
        ) : (
          <Text text={t("Комментарии отсутствуют")} />
        )}
      </div>
    )
  }
)