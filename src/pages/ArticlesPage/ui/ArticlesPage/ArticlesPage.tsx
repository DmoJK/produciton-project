import { classNames } from "shared/lib/classNames/classNames"
import { memo } from "react"
import { ArticleList, ArticleView } from "entities/Article"
import cls from "./ArticlesPage.module.scss"

interface ArticlesPageProps {
  className?: string
}


const ArticlesPage = ({ className }: ArticlesPageProps) => {

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList
        view={ArticleView.LIST}
        articles={[]}
      />
    </div>
  )
}

export default memo(ArticlesPage)
