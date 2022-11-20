import React from "react";
import clsx from "clsx";
import styles from "./NotCollapseRootRoot1.module.css";

export const NotCollapseRootRoot1 = ({ variant = "default" }) => {
  const NotCollapseRootRootRootFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <button
      onClick={(e) =>
        NotCollapseRootRootRootFunction(e, "NotCollapseRootRootRoot")
      }
      className={clsx(
        styles.notCollapseRootRootRoot,
        { [styles.loading]: variant === "loading" },
        { [styles.error]: variant === "error" }
      )}
    >
      <div
        className={clsx(
          styles.navbar,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <div className={styles.leftNavBar}>
          <div className={styles.flexColumn}>
            <div className={styles.collapseButton} />
            <img
              src={`https://file.rendit.io/n/j6fHseid0gYZapBNFlGq.svg`}
              className={styles.collapse}
            />
          </div>
          <img
            src={`https://file.rendit.io/n/0I5wi3dDkTzxuU8zMa76.svg`}
            className={styles.line1}
          />
          <img
            src={`https://file.rendit.io/n/WKZVAkVLF3wH8pPpJWEh.png`}
            className={styles.tupLogo}
          />
          <img
            src={`https://file.rendit.io/n/jnyW2rMSDjAJi5FH4ODY.svg`}
            className={styles.line}
          />
          <div className={styles.flexColumn1}>
            <div className={styles.dashboardButton} />
            <img
              src={`https://file.rendit.io/n/HGO8jBqfhGebzmzXh3oP.svg`}
              className={styles.dashboard}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          styles.outBox,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      >
        <div className={styles.insideOutBox}>
          <div className={styles.flexRow}>
            <div className={styles.flexColumn2}>
              <div className={styles.title}>
                <div className={styles.text6}>
                  WELCOME TO MOTION DETECTION APP
                </div>
                <img
                  src={`https://file.rendit.io/n/lZmO2s2EXz9PLnkmNVZ4.svg`}
                  className={styles.homeIcon}
                />
                <div className={styles.text7}>DASHBOARD</div>
              </div>
              <div className={styles.flexColumn3}>
                <div className={styles.whiteFlexRow}>
                  <img
                    src={`https://file.rendit.io/n/c2YgkWIlYRdSjs6vymv6.png`}
                    className={styles.image1}
                  />
                  <div className={styles.flexColumn4}>
                    <div className={styles.flexColumn5}>
                      <div className={styles.text8}>
                        October 29, 2022 - 01:18 45 se
                      </div>
                      <div className={styles.text9}>DATE TIME:</div>
                    </div>
                    <div className={styles.flexRow1}>
                      <div className={styles.button1}>DELETE IMAGE</div>
                      <div className={styles.button2}>VIEW IMAGE</div>
                    </div>
                  </div>
                </div>
                <div className={styles.viewtheimage1}>
                  VIEW<div className={styles.viewtheimage}> THE IMAGE</div>
                </div>
              </div>
            </div>
            <div className={styles.databaseTable1}>
              <div className={styles.databaseTable}>
                <div className={styles.table}>
                  <div className={styles.row}>
                    <div className={styles.cell}>
                      <div className={styles.id1}>
                        <div className={styles.text10}>ID</div>
                      </div>
                    </div>
                    <div className={styles.cell1}>
                      <div className={styles.id1}>
                        <div className={styles.text1}>DATETIME</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.cell2}>
                      <div className={styles.id1}>
                        <div className={styles.text2}>1</div>
                      </div>
                    </div>
                    <div className={styles.cell3}>
                      <div className={styles.id1}>
                        <div className={styles.text3}>
                          October 29, 2022 - 01:18 45 se
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.cell2}>
                      <div className={styles.id1}>
                        <div className={styles.text2}>2</div>
                      </div>
                    </div>
                    <div className={styles.cell3}>
                      <div className={styles.id1}>
                        <div className={styles.text3}>
                          October 29, 2022 - 01:18 41 se
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.text11}>
                ALL DATA
                <div className={styles.viewtheimage}> IN THE DATABASE</div>
              </div>
            </div>
          </div>
          <div className={styles.team}>
            <div className={styles.whiteFlexRow1}>
              <div className={styles.text12}>LAWRENCE AGUIMBAG</div>
              <div className={styles.text13}>LEVY BATARIO</div>
              <div className={styles.flexColumn6}>
                <img
                  src={`https://file.rendit.io/n/W4nZ0XwBcNPKp5ZwHFS0.png`}
                  className={styles.berms}
                />
                <div className={styles.text14}>BERMON FERRERAS</div>
              </div>
              <div className={styles.flexColumn7}>
                <img
                  src={`https://file.rendit.io/n/AfHQLbzzAnWrnsBkO1yw.png`}
                  className={styles.rilan}
                />
                <div className={styles.text15}>MICHAEL RILAN</div>
              </div>
              <div className={styles.text16}>NIGELLE SALVADOR</div>
              <div className={styles.text17}>SEAN MONACILLO</div>
            </div>
            <div className={styles.brickRedRectangle} />
            <img
              src={`https://file.rendit.io/n/XG3hK3eBy2CHeQCQO4Io.png`}
              className={styles.law}
            />
            <img
              src={`https://file.rendit.io/n/FRro5GUUdoxNOKK3gkXV.png`}
              className={styles.levs}
            />
            <div className={styles.text18}>OUR TEAM MEMBERS</div>
            <img
              src={`https://file.rendit.io/n/pvlbHQMZ9ejAWxxf8Apa.png`}
              className={styles.najj}
            />
            <img
              src={`https://file.rendit.io/n/rZqcXRYyPU4y3gOHib9g.png`}
              className={styles.sean}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          styles.loadingSpinner,
          { [styles.loading]: variant === "loading" },
          { [styles.error]: variant === "error" }
        )}
      />
      <img
        src={`https://file.rendit.io/n/VKUDdPXOQEW9F1d6KxwA.png`}
        className={clsx(styles.errorBang, {
          [styles.error]: variant === "error",
        })}
      />
    </button>
  );
};
