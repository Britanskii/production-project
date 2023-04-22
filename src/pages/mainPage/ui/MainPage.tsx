import { useTranslation } from "react-i18next"
import { Counter } from "entities/counter"

const MainPage = () => {
	const { t } = useTranslation()

	return (
		<div>
			<Counter/>
			{t("Главная страница")}
		</div>
	)
}

export default MainPage
