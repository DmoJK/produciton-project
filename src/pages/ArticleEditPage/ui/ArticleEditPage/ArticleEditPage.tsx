import { memo } from "react"

import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"

import { classNames } from "@/shared/lib/classNames/classNames"
import { Text } from "@/shared/ui/deprecated/Text"
import { Page } from "@/widgets/Page"

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
