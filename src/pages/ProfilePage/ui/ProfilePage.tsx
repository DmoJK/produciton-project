import { useParams } from "react-router-dom"
import { Page } from "@/widgets/Page"
import { EditableProfileCard } from "@/features/EditableProfileCard"
import { VStack } from "@/shared/ui/Stack"
import { classNames } from "@/shared/lib/classNames/classNames"
import { ProfileRating } from "@/features/ProfileRating"

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>()

  return (
    <Page className={classNames("", {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
