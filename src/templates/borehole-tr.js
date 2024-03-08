import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import CtaBasic from "../components/CTAbasic";

const BoreHoleTR = props => {
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
              <div className="BoreHoleTRs-heading title-heading">
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
  <h1>WellStreamer Özellikleri</h1>
    <h2>Ana Özellikler</h2>
    <ul>
      <li>HR sondaj kuyusu araştırmaları için özel olarak tasarlanmıştır</li>
      <li>Hızlı ve basit saha operasyonları</li>
      <li>Yüksek hassasiyetli, ivmesiz piezoseramik sensörler</li>
      <li>Küçük çaplı ve hafif</li>
      <li>Herhangi bir sismograf ile uyumlu</li>
    </ul>
    <h2>Uygulama Alanları</h2>
    <ul>
      <li>Çapraz delik sismik test ve tomografi (CST), dikey sismik profilleme (VSP), yüksek çözünürlüklü VSP, düşük frekanslı akustik loglama, sismik yan tarama vb. kullanılarak karada ve su alanlarında sondaj sismik araştırmaları.</li>
      <li>Son derece hassas tesislerin inşası için mühendislik araştırmaları</li>
      <li>Karstlar, kırıklı ve konsolide olmayan bölgeler ve madencilik jeofiziği</li>
      <li>Maden arama</li>
      <li>ASTM D4428 / D4428M standardına uygun olanlar da dahil olmak üzere, toprak temelinin jeoteknik izlenmesi ve yük taşıma kapasitesinin belirlenmesi</li>
      <li>Beton temellerin, kazıkların, istinat duvarlarının, diyafram temellerinin, barajların vb. çapraz delik kaydı.</li>
      <li>Toprak stabilizasyon kontrolü</li>
      <li>Maden şaftı inşaatı sırasında buz duvarının sürekliliğinin ve kalınlığının kontrolü</li>
      <li>Beton hidroelektrik barajlarda çatlak yeri</li>
      <li>Kazık veya temellerin paralel sismik testi</li>
    </ul>
    <h2>Teslimat Seti</h2>
    <ul>
      <li>Hidrofon dizisi WellStreamer</li>
      <li>Şarj cihazı ile pil</li>
      <li>Diziyi kuyu başına sabitlemek için tutucu</li>
    </ul>
    <h2>Hidrofon Dizisi WellStreamer'a Ek Olarak Satın Alınabilir Öğeler</h2>
    <ul>
      <li>Kayma halkalı makara (BGW veya BGW hafif vinç ile)</li>
      <li>Enerji kaynağı (Jack, uzaktan kumandalı JackPad ile)</li>
      <li>Yatay (SHock) ve dikey (GeoSV) polarizasyonun basınç (P) dalgaları (Darbe) veya kesme (S) dalgalarının sondaj kaynakları</li>
      <li>Yaylı (GStreamer), pnömatik (GStreamer-P) ve elektromekanik (GStreamer-E) ankraj sistemli tek ve çok seviyeli 3C sondaj kuyusu probları</li>
      <li>Yüksek frekanslı sismograflar (Sigma 4+ veya DAQlink 4)</li>
      <li>Sondaj kuyusu eğim ölçer (INCLIS)</li>
    </ul>
    <h2>Özellikler</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Özellik</th>
          <th>Değer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Kanal Sayısı</td>
          <td>4, 6, 12, 24 veya 48</td>
        </tr>
        <tr>
          <td>Çalışma Frekansı</td>
          <td>10 - 10 000 Hz</td>
        </tr>
        <tr>
          <td>Piezoelektrik Elemanın Elektrik Kapasitesi</td>
          <td>4 000 pF</td>
        </tr>
        <tr>
          <td>Piezoelektrik Elemanın Hassasiyeti</td>
          <td>180 μV / Pa</td>
        </tr>
        <tr>
          <td>Maksimum Çalışma Basıncı</td>
          <td>60 atm</td>
        </tr>
        <tr>
          <td>Yıkıcı Basınç</td>
          <td> 100 atm</td>
        </tr>
        <tr>
          <td>Hızlanmalara Duyarlılık</td>
          <td>hızlanma gerektirmez</td>
        </tr>
        <tr>
          <td>Derinliğe Bağlı Olarak Hassasiyette Değişiklik</td>
          <td>Hayır</td>
        </tr>
        <tr>
          <td>Ön Amplifikatörün Türü</td>
          <td>düşük gürültülü asimetrik</td>
        </tr>
        <tr>
          <td>Önün Kazancı</td>
          <td>6 dB</td>
        </tr>
        <tr>
          <td>Güç Kaynağı Voltajı</td>
          <td>±11 ile ±16 V arasında bipolar</td>
        </tr>
        <tr>
          <td>Kanal Başına Akım</td>
          <td>10 mA</td>
        </tr>
        <tr>
          <td>Ön Amplifikatörün Çıkış Empedansı</td>
          <td>395 Ω</td>
        </tr>
        <tr>
          <td>Çıkış Sinyalinin Maksimum Değeri</td>
          <td>±3,8 V</td>
        </tr>
        <tr>
          <td>Çalışma Bant Genişliğindeki İçsel Elektriksel Gürültünün (Çıkış) Ortalama Kare Voltajı</td>
          <td>10 μV</td>
        </tr>
        <tr>
          <td>Çalışma Sıcaklığı Aralığı</td>
          <td>-10 ÷ +70 °С</td>
        </tr>
        <tr>
          <td>Depolama Sıcaklığı Aralığı</td>
          <td>-40 ÷ +70 °С</td>
        </tr>
        <tr>
          <td>Hidrofon Modülü Çapı</td>
          <td>42 Milimetre</td>
        </tr>
        <tr>
          <td>Hidrofon Modülünün Uzunluğu</td>
          <td>200 Milimetre</td>
        </tr>
        <tr>
          <td>Hidrofon Modülünün Ağırlığı</td>
          <td>300 gr</td>
        </tr>
        <tr>
          <td>Dizideki Hidrofonlar Arası Mesafe</td>
          <td>istek üzerine, ancak 0,25 m ≥</td>
        </tr>
        <tr>
          <td>Kablo Koruyucu Malzeme</td>
          <td>Poliüretan</td>
        </tr>
        <tr>
          <td>Kablonun Uzunlamasına Hermitizasyonu</td>
          <td>evet</td>
        </tr>
        <tr>
          <td>Kablo ve Hidrofon Modülünün Ekranlanması</td>
          <td>evet</td>
        </tr>
        <tr>
          <td>Kablo Takviyesi</td>
          <td>Kevlar</td>
        </tr>
        <tr>
          <td>Çalışma Yükü</td>
          <td>200 kg</td>
        </tr>
        <tr>
          <td>Kopma Yükü</td>
          <td> 400 kg</td>
        </tr>
        <tr>
          <td>Kablo Çapı</td>
          <td>13 Milimetre</td>
        </tr>
        <tr>
          <td>Kablonun Minimum Bükülme Yarıçapı</td>
          <td>120 Milimetre</td>
        </tr>
        <tr>
          <td>Aktif Bölümün Minimum Bükülme Yarıçapı</td>
          <td>220 Milimetre</td>
        </tr>
        <tr>
          <td>Kablo Ağırlığı</td>
          <td>168 g/m</td>
        </tr>
        <tr>
          <td>Makaralı 130 Metrelik Hidrofon Dizisinin Ağırlığı</td>
          <td>38 kg</td>
        </tr>
        <tr>
          <td>Makara Üzerindeki Boyutlar</td>
          <td>760×775×400 mm ebadında</td>
        </tr>
        <tr>
          <td>Hidrofon Dizisinin Maksimum Uzunluğu</td>
          <td>700 milyon</td>
        </tr>
        <tr>
          <td>Uç Konektörü</td>
          <td>Anlaşmaya göre</td>
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
  query BoreHoleTR($locale: String!, $title: String!) {
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

export default BoreHoleTR;