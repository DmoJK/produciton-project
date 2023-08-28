import { memo } from "react"
import { Page } from "widgets/Page"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { useParams } from "react-router-dom"
import { Text } from "shared/ui/Text/Text"

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames('', {}, [className])}>
      {isEdit ? (
        <Text title={t("Редактирование статьи ") + id} />
      ) : (
        <Text title={t("Создание новой статьи")} />
      )}
    </Page>
  )
})

export default ArticleEditPage
