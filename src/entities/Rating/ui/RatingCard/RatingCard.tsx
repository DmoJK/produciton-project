import { memo, useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { BrowserView, MobileView } from "react-device-detect"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./RatingCard.module.scss"
import { StarRating } from "@/shared/ui/StarRating/StarRating"
import { Card } from "@/shared/ui/Card/Card"
import { HStack, VStack } from "@/shared/ui/Stack"
import { Text } from "@/shared/ui/Text/Text"
import { Modal } from "@/shared/ui/Modal/Modal"
import { Input } from "@/shared/ui/Input/Input"
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button"
import { Drawer } from "@/shared/ui/Drawer/Drawer"

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo(
  ({
    className,
    feedbackTitle = "",
    onAccept,
    onCancel,
    title,
  }: RatingCardProps) => {
    const { t } = useTranslation("")
    const hasFeedback = Boolean(feedbackTitle)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(0)
    const [feedback, setFeedback] = useState("")

    const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
          setIsModalOpen(true)
        } else {
          onAccept?.(selectedStarsCount)
        }
      },
      [hasFeedback, onAccept]
    )

    const acceptHandler = useCallback(() => {
      setIsModalOpen(false)
      onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
      setIsModalOpen(false)
      onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalContent = (
      <>
        <Text title={feedbackTitle} />
        <Input
          value={feedback}
          onChange={setFeedback}
          fullWidth
          placeholder={t("Ваш отзыв")}
        />
      </>
    )

    return (
      <Card className={classNames(cls.RatingCard, {}, [className])}>
        <VStack gap="8" max align="center">
          <Text title={title} />
          <StarRating size={50} onSelect={onSelectStars} />
        </VStack>
        {hasFeedback ? (
          <>
            <BrowserView>
              <Modal isOpen={isModalOpen}>
                <VStack gap="32" max>
                  {modalContent}
                  <HStack max justify="end" gap="16">
                    <Button
                      onClick={cancelHandler}
                      theme={ButtonTheme.OUTLINE_RED}
                    >
                      {t("Закрыть")}
                    </Button>
                    <Button onClick={acceptHandler}>{t("Отправить")}</Button>
                  </HStack>
                </VStack>
              </Modal>
            </BrowserView>
            <MobileView>
              <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                <VStack gap="32" max>
                  {modalContent}
                  <Button size={ButtonSize.L} onClick={acceptHandler} fullWidth>
                    {t("Отправить")}
                  </Button>
                </VStack>
              </Drawer>
            </MobileView>
          </>
        ) : null}
      </Card>
    )
  }
)
