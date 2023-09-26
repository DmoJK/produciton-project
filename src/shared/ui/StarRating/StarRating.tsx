import { memo, useState } from "react"

import StarIcon from "@/shared/assets/icons/star.svg"
import { classNames } from "@/shared/lib/classNames/classNames"

import cls from "./StarRating.module.scss"

import { Icon } from "../Icon/Icon"

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo(
  ({ className, onSelect, selectedStars = 0, size = 30 }: StarRatingProps) => {
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

    const onHover = (starsCount: number) => () => {
      if (!isSelected) {
        setCurrentStarsCount(starsCount)
      }
    }

    const onLeave = () => {
      if (!isSelected) {
        setCurrentStarsCount(0)
      }
    }

    const onClick = (starsCount: number) => () => {
      if (!isSelected) {
        onSelect?.(starsCount)
        setCurrentStarsCount(starsCount)
        setIsSelected(true)
      }
    }

    return (
      <div className={classNames("", {}, [className])}>
        {stars.map((starNumber) => (
          <Icon
            data-testid={`StarRating.${starNumber}`}
            data-selected={currentStarsCount >= starNumber}
            className={classNames(
              cls.starIcon,
              {
                [cls.hovered]: currentStarsCount >= starNumber,
                [cls.selected]: isSelected,
              },
              []
            )}
            width={size}
            height={size}
            Svg={StarIcon}
            key={starNumber}
            onMouseEnter={onHover(starNumber)}
            onMouseLeave={onLeave}
            onClick={onClick(starNumber)}
          />
        ))}
      </div>
    )
  }
)
