import { useTranslation } from "react-i18next"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { Page } from "widgets/Page"
import { useParams } from "react-router-dom"
import { EditableProfileCard } from "features/EditableProfileCard"
import { VStack } from "shared/ui/Stack"
import { classNames } from "shared/lib/classNames/classNames"

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation("profile")
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <Text
        theme={TextTheme.ERROR}
        title={t("Произошла ошибка рпи загрузке профиля")}
      />
    )
  }

  return (
    <Page className={classNames("", {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
