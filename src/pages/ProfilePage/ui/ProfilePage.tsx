import { useParams } from "react-router-dom"

import { EditableProfileCard } from "@/features/EditableProfileCard"
import { ProfileRating } from "@/features/ProfileRating"
import { classNames } from "@/shared/lib/classNames/classNames"
import { VStack } from "@/shared/ui/deprecated/Stack"
import { Page } from "@/widgets/Page"

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>()

  return (
    <Page dataTestId="ProfilePage" className={classNames("", {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
