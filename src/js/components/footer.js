
import { t } from "../i18n/i18n.js";

export function mountFooter(root) {
  if (!root) return;

  root.innerHTML = `
    <footer class="footer app-footer">
      <div class="container">
        <div class="columns is-multiline">

          <!-- Хамтрагч байгууллагууд -->
          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="content">
              <h3 class="title is-5">
                ${t("footer.teamMembers")}
              </h3>

              <ul class="footer-partners">
                <li>
                  <img src="./img/icon/afaci.png" alt="AFACI">
                  <a class="custom-link"
                     href="https://rda.go.kr/afaci/site/project/view?pageId=02020401&pageName=APPT#submenu02020401"
                     target="_blank" rel="noopener noreferrer">
                    ${t("footer.afaci")}
                  </a>
                </li>

                <li>
                  <img src="./img/icon/muls.png" alt="MULS">
                  <a class="custom-link"
                     href="https://muls.edu.mn"
                     target="_blank" rel="noopener noreferrer">
                    ${t("footer.muls")}
                  </a>
                </li>

                <li>
                  <img src="./img/icon/rda.png" alt="RDA">
                  <a class="custom-link"
                     href="https://www.rda.go.kr/foreign/ten2/"
                     target="_blank" rel="noopener noreferrer">
                    ${t("footer.rda")}
                  </a>
                </li>

                <li>
                  <img src="./img/icon/mfali.png" alt="MOFA">
                  <a class="custom-link"
                     href="https://www.mofa.gov.mn"
                     target="_blank" rel="noopener noreferrer">
                    ${t("footer.mfali")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Төслийн баг -->
          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="content">
              <h3 class="title is-5">
                ${t("footer.coreMembers")}
              </h3>

              <ul class="footer-info-list">
                <li>${t("footer.projectInvestigators")}</li>
                <li>${t("footer.researchers")}</li>
                <li>${t("footer.others")}</li>
                <li>${t("footer.softwareDeveloper")}</li>
              </ul>
            </div>
          </div>

          <!-- Холбоо барих -->
          <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="content">
              <h3 class="title is-5">
                ${t("footer.contactInformation")}
              </h3>

              <ul class="footer-info-list">
                <li>${t("footer.university")}</li>
                <li>${t("footer.address")}</li>
                <li>
                  ${t("footer.phone")}: (+976)-89075531
                </li>
                <li>
                  ${t("footer.email")}:
                  <a class="custom-link"
                     href="mailto:orgilid@muls.edu.mn">
                    orgilid@muls.edu.mn
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  `;
}
