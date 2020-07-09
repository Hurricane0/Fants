import React, { useState } from "react";
import { Time } from "./components/Time";
import { Place } from "./components/Place";
import { Action } from "./components/Action";
import { Button } from "./components/Button";
import { HashRouter, Route } from "react-router-dom";
import { ModeButton } from "./components/ModeButton";
import { Quests } from "./components/Quests";

function App() {
  const [times] = useState([30, 60, 90, 120]);
  const [places] = useState([
    "Губы 💋",
    "Шею",
    "Спину",
    "Грудь",
    "Живот",
    "Попу",
    "Губы",
    "Вокруг",
    "Бедра",
    "Ступни",
    "Клитор",
    "Губы"
  ]);
  const [actions] = useState([
    "Лизать",
    "Сосать",
    "Кусать",
    "Целовать",
    "Гладить",
    "Щипать",
    "Засос",
    "Вставить",
    "Смотреть"
  ]);

  const [placesTwo] = useState([
    "Губы",
    "Шею",
    "Спину",
    "Грудь",
    "Живот",
    "Попу",
    "Губы",
    "Вокруг",
    "Бедра",
    "Плечи",
    "Член",
    "Яички"
  ]);
  const [actionsTwo] = useState([
    "Лизать",
    "Сосать",
    "Кусать",
    "Целовать",
    "Гладить",
    "Щипать",
    "Засос",
    "Вставить",
    "Смотреть"
  ]);
  const [quests] = useState([
    "Парень лежит на спине. Девушка медленно проводить грудью с ног до головы по парню, а в конце по очереди дает парню целовать два сосочка",
    "Парень полторы (две) минуты ласкает, целует ступни девушки",
    "Парень две минуты облизывает, кусает, целует попку девушки",
    "Пара подходит к зеркалу и целуется на протяжении ~1 минуты",
    "Взять девушку двумя руками за грудь, и 10 раз проникнуть языком в вагину",
    "Девушка на протяжении 30 секунд водит грудью по спине парня",
    "Девушка садится на стул и закидывает ноги на мужчину. Мужчина 2 минуты делает куни",
    "Парень лежит на спине. Девушка медленно проводить грудью с ног до головы по парню, а в конце по очереди дает парню целовать два сосочка.",
    "Парень ложится на спину. Девушка водит по лицу парня своей вагиной как захочет на протяжении 2 минут",
    "Девушка целует парня от губ до члена на протяжении 1 минуты",
    "Девушка прогибает спину и пытается полностью покласть грудь на кровать. Мужчина вводит палец или пальцы в девушку и минуту делает круговые движения внутри",
    "Девушка ложится на край кровати. Парень садится на колени перед кроватью. максимально широко раздвигает ноги девушки в шпагат и делает куни на протяжении полторы минуты"
  ]);

  const [chosenTime, setChosenTime] = useState(0);
  const [chosenPlace, setChosenPlace] = useState("Hot");
  const [chosenAction, setChosenAction] = useState("Hot");

  const [chosenTimeSecond, setChosenTimeSecond] = useState(0);
  const [chosenPlaceSecond, setChosenPlaceSecond] = useState("Hot");
  const [chosenActionSecond, setChosenActionSecond] = useState("Hot");

  const [chosenQuest, setChosenQuest] = useState("Нажми на кнопку");
  const [increment, setIncrement] = useState(0);

  const playFirst = () => {
    setChosenTime(times[Math.floor(Math.random() * times.length)]);
    setChosenPlace(places[Math.floor(Math.random() * places.length)]);
    setChosenAction(actions[Math.floor(Math.random() * actions.length)]);
  };

  const playSecond = () => {
    setChosenTimeSecond(times[Math.floor(Math.random() * times.length)]);
    setChosenPlaceSecond(placesTwo[Math.floor(Math.random() * places.length)]);
    setChosenActionSecond(
      actionsTwo[Math.floor(Math.random() * actions.length)]
    );
  };

  const [isBackground, setIsBackground] = useState(false);

  const playQuest = () => {
    if (increment >= quests.length - 1) {
      setIncrement(0);
      setChosenQuest(quests[increment]);
    } else {
      setChosenQuest(quests[increment]);
      setIncrement(increment + 1);
    }
  };
  return (
    <>
      <HashRouter>
        <Route exact path="/">
          <div className={isBackground ? "with-background" : null}>
            <div style={{ marginTop: "-17px" }} className={"container"}>
              <Time chosenTime={chosenTime} />
              <div className={"main-container"}>
                <Place chosenPlace={chosenPlace} />

                <Action chosenAction={chosenAction} />
              </div>
              <Button play={playFirst} />
            </div>

            <div
              style={{
                borderTop: "1px solid #0000002e",
                paddingTop: "50px",
                marginBottom: "0px"
              }}
              className={
                isBackground ? "container second-with-bg" : "container second"
              }
            >
              <Time chosenTime={chosenTimeSecond} />
              <div className={"main-container"}>
                <Place chosenPlace={chosenPlaceSecond} />
                <Action chosenAction={chosenActionSecond} />
              </div>
              <Button play={playSecond} />
              <ModeButton />
              <div className={"bg-button-container"}>
                <span
                  className={"bg-button"}
                  onClick={() => setIsBackground(!isBackground)}
                >
                  Background
                </span>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/quests">
          <Quests playQuest={playQuest} quest={chosenQuest} />
        </Route>
      </HashRouter>
    </>
  );
}

export default App;
