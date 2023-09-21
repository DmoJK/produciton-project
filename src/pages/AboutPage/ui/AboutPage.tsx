import { useTranslation } from "react-i18next"

import { Page } from "@/widgets/Page"

const AboutPage = () => {
  const { t } = useTranslation("about")

  return <Page dataTestId="AboutPage">{t("О сайте")}</Page>
}

export default AboutPage
