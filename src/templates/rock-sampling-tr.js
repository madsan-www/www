import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import CtaBasic from "../components/CTAbasic";

const RockTR = props => {
  const post = props.data.markdownRemark;

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
      />
      <section
        className="bg-half-170 d-table w-100"
        style={{ backgroundImage: `url(${post.frontmatter.image})` }}
      >
        <div className="bg-overlay" />
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="RockTRs-heading title-heading">
                <h2 className="text-white title-dark">
                  {" "}
                  {post.frontmatter.title}{" "}
                </h2>
                <p className="text-white-50 para-desc mb-0 mx-auto">
                  {post.frontmatter.description
                    ? post.frontmatter.description
                    : null}
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>{" "}
        {/*end container*/}
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <section class="section">
        <div class="container">

  <div class="row">
  <h1 class="mt-5 mb-4">Alan Sintilasyon Radyometresi SRP-20</h1>
        <h2>Ana Özellikler:</h2>
        <ul>
            <li>Gama anomalilerinin hızlı tespiti</li>
            <li>Yüksek ölçüm hassasiyeti</li>
            <li>Taşınabilirlik ve kullanım kolaylığı</li>
            <li>Ok ve ses göstergesi</li>
            <li>Entegrasyon süresi ayarı</li>
        </ul>

        <h2>SRP-20'nin Ayırt Edici Özellikleri:</h2>
        <ul>
            <li>Sahada çalışmak üzere tasarlandı</li>
            <li>Zaman entegrasyon penceresini ayarlama yeteneği</li>
            <li>Dahili Bluetooth ve USB</li>
            <li>Bir PC'deki verileri görselleştirme yeteneği</li>
            <li>Yürüme modu için sızdırmaz algılama ünitesi</li>
            <li>Günlük kaydı ve yürüme modu algılama birimi ile çalışma için birleşik konsol</li>
        </ul>

        <h2>SRP-20 Uygulama Alanları:</h2>
        <ul>
            <li>Gama radyasyonu ile radyoaktif cevher aranması</li>
            <li>Arazinin radyometrik ölçümü</li>
            <li>Taş ocaklarının ve maden ocaklarının radyometrik testleri</li>
            <li>Radyoaktif kirlenme bölgelerinin tespiti</li>
            <li>Gama ışını günlüğü</li>
        </ul>

        <h2>Paket İçeriği:</h2>
        <ul>
            <li>Yürüme modu algılama ünitesi</li>
            <li>Ölçüm konsolu</li>
            <li>Pil (dahili)</li>
            <li>Şarj cihazı</li>
            <li>Kulaklık</li>
            <li>Bir kaptaki kontrol kaynağı (Co-60)</li>
            <li>Sağlam Kılıf</li>
        </ul>

        <h2>Teknik Özellikler:</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Özellik</th>
                    <th scope="col">Değer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gama radyasyonunun maruz kalma doz oranı</td>
                    <td>0 ÷ 3 000 mcR/saat</td>
                </tr>
                <tr>
                    <td>226Ra radyonüklidin gama radyasyonunun maruziyet doz hızının ölçümünde temel hata</td>
                    <td>en fazla %±15 (30 mcR/h ölçüm alt aralığında standartlaştırılmamıştır)</td>
                </tr>
                <tr>
                    <td>Kaydedilen gama ortalama sayım hızının ölçüm aralığı</td>
                    <td>0 ÷ 10 000 s-1</td>
                </tr>
                <tr>
                    <td>Kaydedilen gama ortalama sayım hızının ölçümünde temel hata</td>
                    <td>%±10'dan fazla değil</td>
                </tr>
                <tr>
                    <td>Gama tespitinin enerji aralığı</td>
                    <td>35 ÷ 3 000 keV</td>
                </tr>
                <tr>
                    <td>Ortalama alma penceresinin varyasyon sınırı</td>
                    <td>1 ÷ 20 sn</td>
                </tr>
                <tr>
                    <td>Çalışma modunun ayarlanma süresi</td>
                    <td>en fazla 1 dakika</td>
                </tr>
                <tr>
                    <td>Güç kaynağı voltajı</td>
                    <td>12,5 ± 2 V</td>
                </tr>
                <tr>
                    <td>Ortalama güç</td>
                    <td>0,8 W</td>
                </tr>
                <tr>
                    <td>Güç kaynağının ömrü</td>
                    <td>en az 30 saat</td>
                </tr>
                <tr>
                    <td>Çalışma sıcaklığı aralığı</td>
                    <td>-40 ÷ +50 ˚С</td>
                </tr>
                <tr>
                    <td>Boyutlar - Algılama ünitesi</td>
                    <td>56 × 155 × 480 mm</td>
                </tr>
                <tr>
                    <td>Boyutlar - Güç beslemeli ölçüm konsolu</td>
                    <td>1190 × 90 × 145 mm</td>
                </tr>
                <tr>
                    <td>Arabirim</td>
                    <td>USB, Bluetooth</td>
                </tr>
                <tr>
                    <td>Ağırlık - Algılama ünitesi</td>
                    <td>1,3 kg</td>
                </tr>
                <tr>
                    <td>Ağırlık - Güç beslemeli ölçüm konsolu</td>
                    <td>2,6 kg</td>
                </tr>
                <tr>
                    <td>Ömrü</td>
                    <td>en az 6 yıl</td>
                </tr>
            </tbody>
        </table>
</div>
</div>

      </section>
      {post.frontmatter.cta ? <CtaBasic /> : null}
    </>
  );
};

export const query = graphql`
  query RockTR($locale: String!, $title: String!) {
    markdownRemark(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        description
        image
        cta
      }
      html
    }
  }
`;

export default RockTR;