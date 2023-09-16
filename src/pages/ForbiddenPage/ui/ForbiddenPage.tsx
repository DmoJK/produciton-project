import { useTranslation } from "react-i18next"

import { Text, TextTheme } from "@/shared/ui/Text"
import { Page } from "@/widgets/Page"

const ForbiddenPage = () => {
  const { t } = useTranslation("admin")

  return (
    <Page>
      <Text
        title={t("У вас нет доступа к этой странице")}
        theme={TextTheme.ERROR}
      />
    </Page>
  )
}

export default ForbiddenPage
