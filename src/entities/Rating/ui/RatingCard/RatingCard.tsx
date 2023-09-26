import { memo, useCallback, useState } from "react"

import { BrowserView, MobileView } from "react-device-detect"
import { useTranslation } from "react-i18next"

import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button"
import { Card } from "@/shared/ui/Card"
import { Drawer } from "@/shared/ui/Drawer"
import { Input } from "@/shared/ui/Input"
import { Modal } from "@/shared/ui/Modal"
import { HStack, VStack } from "@/shared/ui/Stack"
import { StarRating } from "@/shared/ui/StarRating"
import { Text } from "@/shared/ui/Text"

interface RatingCardProps {
  className?: string
  rate?: number
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
    rate = 0,
  }: RatingCardProps) => {
    const { t } = useTranslation("")
    const hasFeedback = Boolean(feedbackTitle)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
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
          data-testid="RatingCard.Input"
          value={feedback}
          onChange={setFeedback}
          fullWidth
          placeholder={t("Ваш отзыв")}
        />
      </>
    )

    return (
      <Card max className={className} data-testid="RatingCard">
        <VStack gap="8" max align="center">
          <Text title={starsCount ? t("Спасибо за оценку!") : title} />
          <StarRating
            selectedStars={starsCount}
            size={50}
            onSelect={onSelectStars}
          />
        </VStack>
        {hasFeedback ? (
          <>
            <BrowserView>
              <Modal isOpen={isModalOpen}>
                <VStack gap="32" max>
                  {modalContent}
                  <HStack max justify="end" gap="16">
                    <Button
                      data-testid="RatingCard.Close"
                      onClick={cancelHandler}
                      theme={ButtonTheme.OUTLINE_RED}
                    >
                      {t("Закрыть")}
                    </Button>
                    <Button
                      data-testid="RatingCard.Send"
                      onClick={acceptHandler}
                    >
                      {t("Отправить")}
                    </Button>
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
